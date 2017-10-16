using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AngularWeb.Business.Model
{
    public class TodoMap
    {
    public TodoMap(EntityTypeBuilder<Todo> entityBuilder)
    {
      entityBuilder.HasKey(t => t.Id);
      entityBuilder.Property(t => t.Name).IsRequired();
      entityBuilder.Property(t => t.Priority).IsRequired();
      entityBuilder.Property(t => t.Status).IsRequired();
      entityBuilder.Property(t => t.DueDate).IsRequired();
    }


  }
}
