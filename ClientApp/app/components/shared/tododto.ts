import { Priority } from './priority'
import { Status } from './status'

export class TodoDto {
  Id: number;
  Name: string;
  Priority: Priority;
  Status: Status;
  Duedate: Date;
}