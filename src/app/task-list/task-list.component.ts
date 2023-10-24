import { Component, OnInit } from '@angular/core';
import { TaskService } from '../shared/task/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent  {
  constructor(private taskService: TaskService) {}




  addTask() {
    this.taskService.add_task()
  }
}
