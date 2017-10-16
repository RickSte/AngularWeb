using AngularWeb.Business.Model;
using AngularWeb.Models;
using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AngularWeb.DataAccess
{
    public class MappingProfile : Profile
    {
    public MappingProfile()
    {
      CreateMap<User, UserDto>();
      CreateMap<UserDto, User>();
      CreateMap<Todo, TodoDto>();
      CreateMap<TodoDto, Todo>();
    }
    }
}
