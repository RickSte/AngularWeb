using AngularWeb.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace AngularWeb.Business.Model
{
    public class User
    {
    protected User() { }

    private const string EmailPattern = @"\A(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?)\Z";

    public User(string firstName,string lastName,string email,string password)
    {
      AssertEmail(email);
      AssertPassword(password);
      Id = Guid.NewGuid();
      FirstName = firstName;
      LastName = lastName;
      Email = email;
      Password = password;
    }

    public Guid Id { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public string Email { get; set; }
    public string Password { get; set; }


    private void AssertEmail(string email)
    {
      var isvalid = Regex.IsMatch(email, EmailPattern, RegexOptions.IgnoreCase);

      if (isvalid)
        return;

      throw new ArgumentException("Invalid EmailAddress");
    }

    private static void AssertPassword(string password)
    {
      if (string.IsNullOrWhiteSpace(password) || password.Length < 6)
        throw new ArgumentException("Invalid Password!");
      
    }
  }
}
