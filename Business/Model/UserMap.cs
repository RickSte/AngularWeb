using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace AngularWeb.Business.Model
{
  public class UserMap
  {
    private EntityTypeBuilder<User> entityTypeBuilder;

    public UserMap(EntityTypeBuilder<User> entityBuilder)
    {
      entityBuilder.HasKey(t => t.Id);
      entityBuilder.Property(t => t.Email);
      entityBuilder.Property(t => t.FirstName).IsRequired();
      entityBuilder.Property(t => t.LastName).IsRequired();
      entityBuilder.Property(t => t.Password).IsRequired();


    }
  }
}
