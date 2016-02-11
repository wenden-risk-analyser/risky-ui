using System.Net.Http.Headers;
using System.Web.Http;
using Newtonsoft.Json.Converters;

namespace Risky
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            // Web API routes
            config.MapHttpAttributeRoutes();

            // Web API configuration and services
            var formatters = config.Formatters;
            var settings = formatters.JsonFormatter.SerializerSettings;

            // send enums back as strings
            settings.Converters.Add(new StringEnumConverter {CamelCaseText = true});
            formatters.JsonFormatter.SupportedMediaTypes.Add(new MediaTypeHeaderValue("text/html"));

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );
        }
    }
}
