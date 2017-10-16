using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AngularWeb.Business.Model
{
  public enum Priority
 { Low = 0, Medium = 1, High = 2 };
  public enum Status
  { NotStarted = 0, InProgress = 1, Completed = 2 };

    public class Todo
    {
    protected Todo() { }

    public Todo(string name,DateTime dueDate,Priority priority = Priority.Low)
    {
      Name = name;
      DueDate = dueDate;
      Priority = priority;
      Status = Status.NotStarted;
    }

    public int Id { get; set; }
    public string Name { get; set; }
    public Priority Priority { get; set; }
    public Status Status { get; set; }
    public DateTime DueDate { get; set; }
    public User Creator { get; set; }

  }
}
