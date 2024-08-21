

namespace AngularWIthASP.server.Database.Context;
using Microsoft.EntityFrameworkCore;
using Teremana.Server.Models;

public class ApplicationDbContext : DbContext
{
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
        : base(options)
    {
    }

    public DbSet<UserAccount> UserAccounts { get; set; }
    public DbSet<Training> Trainings { get; set; }
    public DbSet<Person> People { get; set; }


    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);
        modelBuilder.Entity<Training>()
            .HasOne(t => t.Person)
            .WithMany()
            .OnDelete(DeleteBehavior.Cascade);
    }
}

