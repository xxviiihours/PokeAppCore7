using Ocelot.DependencyInjection;
using Ocelot.Middleware;
using PokeAppCore7.PokemonUI.Helpers;

var builder = WebApplication.CreateBuilder(args);

builder.Configuration.SetBasePath(builder.Environment.ContentRootPath)
    .AddJsonFile("ocelot.json", optional: false, reloadOnChange: true);

// Add services to the container.
builder.Services.AddOcelot();
builder.Services.AddControllersWithViews();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();

// app.Map("/gateway", ApiGatewayProvider.UseOcelot);

app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}");
    

app.UseOcelot().Wait();

app.MapFallbackToFile("index.html");

app.Run();
