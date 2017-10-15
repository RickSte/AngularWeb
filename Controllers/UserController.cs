using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using AngularWeb.Business;
using AngularWeb.Business.Model;
using AngularWeb.Models;
using Microsoft.AspNetCore.Http;
using AutoMapper;

namespace AngularWeb.Controllers
{
  [Route("api/[controller]")]
    public class UserController : ControllerBase
    {
    private readonly IUnitOfWork _unitOfWork;
    private readonly IMapper _mapper;

    public UserController(IUnitOfWork unitOfWork, IMapper mapper)
    {
      _unitOfWork = unitOfWork;
      _mapper = mapper;
    }
    [HttpPost]
    public IActionResult CreateUser([FromBody] UserDto userDto)
    {

      if (_unitOfWork.Users.GetUserByEmail(userDto.Email) != null)
      {
        return new StatusCodeResult(StatusCodes.Status409Conflict);
      }

      _unitOfWork.Users.Add(new User(userDto.FirstName, userDto.LastName, userDto.Email, userDto.Password));
      _unitOfWork.Complete();

      return Ok();
    }
    [HttpGet]
    public IEnumerable<UserDto> GetAll()
    {

      var users = _unitOfWork.Users.GetAll();

      return _mapper.Map<IEnumerable<UserDto>>(users);

    }

    [HttpGet("{email}")]

    public IActionResult GetByEmail(string email)
    {
      var user = _unitOfWork.Users.GetUserByEmail(email);
      if (user == null)
        return NotFound();

      return new ObjectResult(user);
    }

    [HttpPut]
    public IActionResult UpdateUser([FromBody] UserDto userdto)
    {
      var user = _unitOfWork.Users.GetUserByEmail(userdto.Email);

      user.Email = userdto.Email;
      user.FirstName = userdto.FirstName;
      user.LastName = userdto.LastName;

      _unitOfWork.Complete();

      return Ok();
    }
    }
}
