import { Component, OnInit } from '@angular/core';
import { TaskService } from '../shared/task/task.service';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.css'],
})
export class TableViewComponent  {
  constructor(private taskService: TaskService) {}




  addTask() {
    this.taskService.add_task()
  }
}
