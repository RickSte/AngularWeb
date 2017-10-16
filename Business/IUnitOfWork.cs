using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AngularWeb.Business
{
    public interface IUnitOfWork : IDisposable
    {
    IUserRepository Users { get; }
    ITodoRepository Todos { get; }
    int Complete();
    }
}
