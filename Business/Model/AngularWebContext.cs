using AngularWeb.Business.Model;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AngularWeb.Business.Model
{
    public class AngularWebContext : DbContext
    {
    public AngularWebContext(DbContextOptions<AngularWebContext> options) : base(options)
    { }

    public virtual DbSet<User> Users { get; set; }
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
      base.OnModelCreating(modelBuilder);
      new UserMap(modelBuilder.Entity<User>());
    }
  }
}
