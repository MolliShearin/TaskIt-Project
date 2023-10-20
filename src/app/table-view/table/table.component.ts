import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/shared/task/task.model';
import { TaskService } from 'src/app/shared/task/task.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent  implements OnInit{

  tasks = [];
constructor(private taskService: TaskService){
}

ngOnInit(): void {
    this.tasks = this.taskService.get_tasks();
    this.taskService.taskListChanged.subscribe((tasks: Task[]) => {
      this.tasks = tasks;
    })
  }
}

