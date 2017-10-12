using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AngularWeb.Business.Model
{
    public class User
    {

    private const string EmailPattern = @"\A(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?)\Z";

    public User(string firstName,string lastName,string email,string password)
    {
      Id = Guid.NewGuid();
      FirstName = firstName;
      LastName = lastName;
      Email = email;

    }

    public Guid Id { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public string Email { get; set; }
    public string Password { get; set; }


    private void AssertEmail()
    {

    }

    private static void AsssertPassword()
    {

    }

  }
}
