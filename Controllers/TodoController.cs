using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using AngularWeb.Business.Model;
using AngularWeb.Business;
using AutoMapper;
using AngularWeb.Models;
using System.Collections;

namespace AngularWeb.Controllers
{
  [Route("api/[controller]")]
  public class TodoController : ControllerBase
  {
    private readonly IUnitOfWork _unitOfWork;
    private readonly IMapper _mapper;

    public TodoController(IUnitOfWork unitOfWork, IMapper mapper)
    {
      _unitOfWork = unitOfWork;
      _mapper = mapper;
    }
    [HttpGet("{id}")]
    public TodoDto GetTodo(int id)
    {
      var todo = _unitOfWork.Todos.Get(id);
      return _mapper.Map<TodoDto>(todo);
    }

    [HttpGet]
    public IEnumerable<TodoDto> GetTodos() {

      var todos = _unitOfWork.Todos.GetAll();

      return _mapper.Map<IEnumerable<TodoDto>>(todos);
    }
    [HttpPost]
    public IActionResult CreateTodo([FromBody] TodoDto tododto)
    {

      _unitOfWork.Todos.Add(new Todo(tododto.Name,tododto.DueDate,tododto.Priority));
      _unitOfWork.Complete();

      return Ok();
    }
    [HttpPut]
    public IActionResult UpdateTodo([FromBody] TodoDto tododto )
    {
      var todo = _unitOfWork.Todos.Get(tododto.Id);

      todo.Priority = tododto.Priority;
      todo.Status = tododto.Status;

      _unitOfWork.Complete();

      return Ok(tododto);
    }
    [HttpDelete]
    public IActionResult DeletTodo([FromBody] Todo todo)
    {

      return Ok();
    }



  }
}