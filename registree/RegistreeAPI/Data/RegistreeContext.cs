using Microsoft.EntityFrameworkCore;

namespace RegistreeApi.Data
{
    public class RegistreeContext : DbContext
    {
        public RegistreeContext(DbContextOptions<RegistreeContext> options) : base(options)
        {
        }

        public DbSet<RegistreeApi.Models.Registree> Registrees { get; set; }
    }
}
