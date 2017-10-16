using AngularWeb.Business;
using AngularWeb.Business.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AngularWeb.DataAccess
{
    public class TodoRepository : Repository<Todo>, ITodoRepository
    {

    public TodoRepository(AngularWebContext context) : base(context)
    { }




    public AngularWebContext AngularWebContext
    {
      get { return Context as AngularWebContext; }
    }

  }
}
