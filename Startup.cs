using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.SpaServices.Webpack;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.EntityFrameworkCore;
using AngularWeb.Business.Model;
using AngularWeb.Business;
using AngularWeb.DataAccess;
using AutoMapper;

namespace AngularWeb
{
  public class Startup
  {
    public Startup(IConfiguration configuration)
    {
      Configuration = configuration;
    }

    public IConfiguration Configuration { get; }

    // This method gets called by the runtime. Use this method to add services to the container.
    public void ConfigureServices(IServiceCollection services)
    {
      services.AddScoped<IUnitOfWork, UnitOfWork>();
      services.AddScoped<IRepository<User>, Repository<User>>();
      services.AddScoped<IUserRepository, UserRepository>();
      services.AddScoped<IRepository<Todo>, Repository<Todo>>();
      services.AddScoped<ITodoRepository, TodoRepository>();

      services.AddAutoMapper();

      services.AddMvc();

      services.AddDbContext<AngularWebContext>(options => options.UseSqlServer(Configuration.GetConnectionString("AppDatabase")));

    }

    // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
    public void Configure(IApplicationBuilder app, IHostingEnvironment env)
    {
      if (env.IsDevelopment())
      {
        app.UseDeveloperExceptionPage();
        app.UseWebpackDevMiddleware(new WebpackDevMiddlewareOptions
        {
          HotModuleReplacement = true
        });
      }
      else
      {
        app.UseExceptionHandler("/Home/Error");
      }

      app.UseStaticFiles();

      app.UseMvc(routes =>
      {
        routes.MapRoute(
                  name: "default",
                  template: "{controller=Home}/{action=Index}/{id?}");

      });

      app.MapWhen(x => !x.Request.Path.Value.StartsWith("/api"), builder =>
      {
        builder.UseMvc(routes =>
        {
          routes.MapSpaFallbackRoute(
              name: "spa-fallback",
              defaults: new { controller = "Home", action = "Index" });
        });
      });
    }
  }
}
