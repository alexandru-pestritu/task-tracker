import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { Task } from '../task';
import { Input } from '@angular/core';
import { NgFor, CommonModule } from '@angular/common';
import { TaskCardComponent } from '../task-card/task-card.component';


@Component({
  selector: 'app-task-grid',
  standalone: true,
  imports: [MatCardModule,NgFor,CommonModule,TaskCardComponent],
  templateUrl: './task-grid.component.html',
  styleUrl: './task-grid.component.scss'
})
export class TaskGridComponent {
  @Input() tasks: Task[];
}
