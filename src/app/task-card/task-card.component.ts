import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { Task } from '../task';
import { Input } from '@angular/core';
import { NgFor, CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-task-card',
  standalone: true,
  imports: [MatCardModule,NgFor,CommonModule,MatIconModule],
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.scss'
})
export class TaskCardComponent {
  @Input() task: Task;

  editTask(task) {
    console.log('Editing task', task);
  }

  deleteTask(task) {
    console.log('Deleting task', task);
  }
}

