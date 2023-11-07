using Microsoft.EntityFrameworkCore;
using RegistreeAPI.Data;
using Npgsql.EntityFrameworkCore.PostgreSQL;

using Microsoft.Extensions.Configuration;

var builder = WebApplication.CreateBuilder(args);

// Add CORS policy to the 'builder.Services' section:
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowLocalhost5118", builder =>
    {
        builder.WithOrigins("http://localhost:5118")
            .AllowAnyHeader()
            .AllowAnyMethod();
    });
});

// Add services to the container.
builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Configuration.AddJsonFile("appsettings.json");

var connectionString = builder.Configuration.GetConnectionString("RegistreeDbConnection");
builder.Services.AddDbContext<RegistreeContext>(options => options.UseNpgsql(connectionString));

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

if (app.Environment.IsProduction())
{
    app.UseHttpsRedirection();
}

// app.UseHttpsRedirection();

app.UseCors("AllowLocalhost5118");

app.UseAuthorization();

app.MapControllers();

using var scope = app.Services.CreateScope();
var services = scope.ServiceProvider;

try
{
    var dbContext = services.GetRequiredService<RegistreeContext>();
    dbContext.Database.Migrate();
}
catch (Exception ex)
{
    // Handle any exceptions during migration here:
    // Place logs here as well:
}

app.Run();
