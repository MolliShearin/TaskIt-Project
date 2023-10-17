import { Component } from '@angular/core';
import { Task } from 'src/app/shared/task/task.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
tasks = [
  new Task("Test0", "Test1", "Test2", "Test3"),
  new Task("Test0", "Test1", "Test2", "Test3"),
  new Task("Test0", "Test1", "Test2", "Test3"),
  new Task("Test0", "Test1", "Test2", "Test3")
]
}
