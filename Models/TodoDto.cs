using AngularWeb.Business.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AngularWeb.Models
{
    public class TodoDto
    {
    public int Id { get; set; }
    public string Name { get; set; }
    public Priority Priority { get; set; }
    public Status Status { get; set; }
    public DateTime DueDate { get; set; }

  }

}

