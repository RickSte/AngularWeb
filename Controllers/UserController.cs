using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using AngularWeb.Business;
using AngularWeb.Business.Model;

namespace AngularWeb.Controllers
{
  [Route("api/[controller]")]
    public class UserController : ControllerBase
    {
    private readonly IUnitOfWork unitOfWork;

    public UserController(IUnitOfWork unitOfWork)
    {
      this.unitOfWork = unitOfWork;
    }
    
    [HttpGet]
    public IEnumerable<User> GetAll()
    {
      return unitOfWork.Users.GetAll();
    }

    [HttpGet("{email}, Name = GetUser")]

    public IActionResult GetByEmail(string email)
    {
      var user = unitOfWork.Users.GetUserByEmail(email);
      unitOfWork.Complete();
      if (user == null)
        return NotFound();

      return new ObjectResult(user);
    }

    }
}
