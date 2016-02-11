using System;
using System.Threading.Tasks;
using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Risky.Startup))]
namespace Risky
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
        }
    }
}
