using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using AngularWeb.Models;
using AngularWeb.Business;
using AutoMapper;
using AngularWeb.Business.Model;

namespace AngularWeb.Controllers
{
  [Route("api/[controller]")]
  public class AuthenticationController : Controller
  {
    private readonly IUnitOfWork _unitOfWork;
    private readonly IMapper _mapper;

    public AuthenticationController(IUnitOfWork unitOfWork, IMapper mapper)
    {
      _unitOfWork = unitOfWork;
      _mapper = mapper;
    }



    [HttpPost]
    [Route("api/authentication/logout")]
    public void Post()
    {
     
    }

    [HttpPost]
    public IActionResult AuthenticateUser([FromBody] UserDto userDto)
    {
      User loginUser = _unitOfWork.Users.GetUserByEmail(userDto.Email);

      if (loginUser == null)
        return BadRequest();
      if (!loginUser.VerifyPassword(userDto.Email + userDto.Password))
        return BadRequest();

      UserDto loggedInUser = _mapper.Map<UserDto>(loginUser);
      loggedInUser.Password = "";

      return new OkObjectResult(loggedInUser);
    }


  }
}
