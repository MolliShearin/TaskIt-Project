import { Injectable } from '@angular/core';
import { Task } from './task.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks = []

  constructor() {
}

taskListChanged = new Subject<Task[]>();


get_tasks() {
  return this.tasks.slice();
}

add_task(title, description, dueDate, priority, status) {
  this.tasks.push(new Task(title, description, dueDate, priority, status));
  this.taskListChanged.next(this.tasks.slice());
}
}
