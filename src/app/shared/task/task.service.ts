import { Injectable } from '@angular/core';
import { Task } from './task.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks = [
    new Task(0, "Title", "Description", "2023-11-02", "High", "In Progress")
  ]

private selectedTaskId = 0;

  constructor() {
}

taskListChanged = new Subject<Task[]>();

selectedTaskIdChanged = new Subject<Task>();

setSelectedTaskId(id: number) {
this.selectedTaskId = id;
this.selectedTaskIdChanged.next(this.getSelectedTaskId());
}

getSelectedTaskId() {
  if(this.selectedTaskId == 0) {
    return new Task(0, "", "", "", "", "");
  }
  for (let task of this.tasks) {
    if(task.id === this.selectedTaskId) {
      return task;
    }
  }
}

get_tasks() {
  return this.tasks.slice();
}

add_task(id, title, description, dueDate, priority, status) {
  this.tasks.push(new Task(id, title, description, dueDate, priority, status));
  this.taskListChanged.next(this.tasks.slice());
}
}
