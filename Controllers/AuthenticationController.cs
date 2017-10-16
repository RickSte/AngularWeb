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
  public class AuthenticationController : ControllerBase
  {
    private readonly IUnitOfWork _unitOfWork;
    private readonly IMapper _mapper;

    public AuthenticationController(IUnitOfWork unitOfWork, IMapper mapper)
    {
      _unitOfWork = unitOfWork;
      _mapper = mapper;
    }



    [HttpPut]
    public IActionResult LogoutUser()
    {
      //remove User from session

      return Ok();
    }

    [HttpPost]
    public IActionResult AuthenticateUser([FromBody] UserDto userDto)
    {
      //create User Session

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
