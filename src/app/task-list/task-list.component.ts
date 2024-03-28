import { Component } from '@angular/core';
import { Task } from '../task';
import { Input } from '@angular/core';
import { NgFor, CommonModule } from '@angular/common';
import { FilterComponent } from '../filter/filter.component';
import { Status } from '../status';
import {MatIconModule} from '@angular/material/icon';
import { TaskService } from '../Services/task.service';
import { MatDialog } from '@angular/material/dialog';
import { EditTaskComponent } from '../edit-task/edit-task.component';


@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [NgFor,CommonModule,FilterComponent,MatIconModule, EditTaskComponent],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent {
  tasks: Task[];
  filteredTasks: Task[];

  ngOnInit(): void {
    this.tasks = this.taskService.getTasks();
    this.filteredTasks = this.tasks;
  }

  handleStatusSelected(status) {
    this.filteredTasks = this.tasks.filter((task) => task.status === status);
 }

 editTask(task: Task): void {
  const dialogRef = this.dialog.open(EditTaskComponent, {
     data: task,
   });

   dialogRef.afterClosed().subscribe((result) => {
     console.log('The dialog was closed');
     this.taskService.editTask(task);
   });
 }


 deleteTask(task: Task): void {
  this.taskService.deleteTask(task.id);
  this.tasks = this.taskService.getTasks();
}

  constructor(
    private taskService: TaskService, private dialog: MatDialog
  ) {}

 
}
