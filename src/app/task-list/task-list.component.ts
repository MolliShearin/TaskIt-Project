import { Component, OnInit } from '@angular/core';
import { TaskService } from '../shared/task/task.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent  {
  constructor(private taskService: TaskService) {}

  addTaskSubmit(formObj: NgForm) {
    console.log("Submitted!", formObj)
    let title = formObj.value.title;
    let description = formObj.value.description;
    let dueDate = formObj.value.dueDate;
    let priority = formObj.value.priority;
    let status = formObj.value.status;
    this.taskService.add_task(title, description, dueDate, priority, status);
    formObj.reset();
  }
}
