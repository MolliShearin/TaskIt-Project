import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Task } from 'src/app/shared/task/task.model';
import { TaskService } from 'src/app/shared/task/task.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent  implements OnInit{

  tasks = [];
  selectedTask;

constructor(private taskService: TaskService){
}

ngOnInit(): void {
    this.tasks = this.taskService.get_tasks();
    this.taskService.taskListChanged.subscribe((tasks: Task[]) => {
      this.tasks = tasks;
    })
    this.selectedTask = this.taskService.getSelectedTask();
    this.taskService.selectedTaskIdChanged.subscribe((task: Task) => {this.selectedTask = task});
  }

  selectTask(id: number) {
    this.taskService.setSelectedTaskId(id);
  }

  cancelEditTask(formObj: NgForm) {

  }

  editTaskSubmit(formObj: NgForm) {

  }

}

