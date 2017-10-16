using AngularWeb.Business;
using AngularWeb.Business.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AngularWeb.DataAccess
{
    public class UnitOfWork : IUnitOfWork
    {
    private readonly AngularWebContext _context;

    public UnitOfWork(AngularWebContext context)
    {
      _context = context;
      Users = new UserRepository(_context);
      Todos = new TodoRepository(_context);
    }

    public IUserRepository Users { get; private set; }
    public ITodoRepository Todos { get; private set; }


    public int Complete()
    {
      return _context.SaveChanges();
    }
    public void Dispose()
    {
      _context.Dispose();
    }

    }
}
