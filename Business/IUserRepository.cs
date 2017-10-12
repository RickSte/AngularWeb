using AngularWeb.Business.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AngularWeb.Business
{
    public interface IUserRepository : IRepository<User>
    {
    User GetUserByEmail(string email);
    }
}
