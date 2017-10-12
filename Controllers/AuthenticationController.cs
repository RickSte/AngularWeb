using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using AngularWeb.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace AngularWeb.Controllers
{
  [Route("api/[controller]")]
  public class AuthenticationController : Controller
  {
    // Delete: api/authentication/logut
    [HttpPost]
    [Route("api/authentication/logout")]
    public void Post()
    {
     
    }

    // POST api/authentication
    [HttpPost]
    public void Post(UserDto userDto)
    {

    }


  }
}
