import { Component } from '@angular/core';
import { Task } from '../task';
import { Input } from '@angular/core';
import { NgFor, CommonModule } from '@angular/common';
import { FilterComponent } from '../filter/filter.component';
import { Status } from '../status';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [NgFor,CommonModule,FilterComponent,MatIconModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent {
  @Input() tasks: Task[];
  filteredTasks: Task[];

  ngOnInit(): void {
    this.filteredTasks = this.tasks;
  }

  handleStatusSelected(status) {
    this.filteredTasks = this.tasks.filter((task) => task.status === status);
 }

 editTask(task) {
   console.log('Editing task', task);
 }

  deleteTask(task) {
    this.tasks.splice(this.tasks.indexOf(task), 1);
  }
 
}
