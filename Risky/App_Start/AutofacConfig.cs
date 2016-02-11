using System.Reflection;
using System.Web.Http;
using System.Web.Mvc;
using Autofac;
using Autofac.Integration.Mvc;
using Autofac.Integration.WebApi;
using Service;
using Service.Helpers;

namespace Risky
{
    public static class AutofacConfig
    {
        public static void RegisterContainer()
        {
            var builder = new ContainerBuilder();

            // Get your HttpConfiguration.
            var config = GlobalConfiguration.Configuration;

            // Register your Web API controllers.
            builder.RegisterApiControllers(Assembly.GetExecutingAssembly());

            builder.RegisterType<BetService>().AsImplementedInterfaces().InstancePerRequest();
            builder.RegisterType<CustomerService>().AsImplementedInterfaces().InstancePerRequest();
            builder.RegisterType<CustomerRiskProfile>().SingleInstance();
            builder.RegisterType<BetRiskProfile>().SingleInstance();

            // Configure MVC with the dependency resolver.
            var container = builder.Build();
            DependencyResolver.SetResolver(new AutofacDependencyResolver(container));
            config.DependencyResolver = new AutofacWebApiDependencyResolver(container);
        }
    }
}
