import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { Task } from '../task';
import { Input } from '@angular/core';
import { NgFor, CommonModule } from '@angular/common';
import { TaskCardComponent } from '../task-card/task-card.component';
import { TaskService } from '../Services/task.service';


@Component({
  selector: 'app-task-grid',
  standalone: true,
  imports: [MatCardModule,NgFor,CommonModule,TaskCardComponent],
  templateUrl: './task-grid.component.html',
  styleUrl: './task-grid.component.scss'
})
export class TaskGridComponent {
  tasks: Task[];

  constructor(
    private taskService: TaskService,
  ) {}
  
  ngOnInit(): void {
    this.tasks = this.taskService.getTasks();
  }

  deleteTask(task: Task): void {
    this.taskService.deleteTask(task.id);
    this.tasks = this.taskService.getTasks();
  }
}
