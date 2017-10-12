using AngularWeb.Business;
using AngularWeb.Business.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AngularWeb.DataAccess
{
    public class UserRepository : Repository<User>, IUserRepository
    {
    public UserRepository(AngularWebContext context) : base(context)
    {}


    public User GetUserByEmail(string email)
    {
      return AngularWebContext.Users.SingleOrDefault(u => u.Email == email);

    }


    public AngularWebContext AngularWebContext
    {
      get { return Context as AngularWebContext; }
    }
    }
}
