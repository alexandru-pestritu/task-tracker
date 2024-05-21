import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { Task } from '../task';
import { Input, Output, EventEmitter } from '@angular/core';
import { NgFor, CommonModule } from '@angular/common';
import { TaskCardComponent } from '../task-card/task-card.component';
import { TaskService } from '../Services/task.service';
import { Observable } from 'rxjs';
import { MatIcon } from '@angular/material/icon';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-task-grid',
  standalone: true,
  imports: [MatCardModule,NgFor,CommonModule,TaskCardComponent, MatIcon, RouterLink, RouterModule],
  templateUrl: './task-grid.component.html',
  styleUrl: './task-grid.component.scss',
  providers: [TaskService]
})
export class TaskGridComponent {
  tasks: Task[] = [];


  constructor(
    private taskService: TaskService,
  ) {}
  
  ngOnInit(): void {
    this.getTasks();
  }

  getTasks(): void {
    this.taskService.getTasks().subscribe(tasks => {
      this.tasks = tasks;
    });
  }
}
