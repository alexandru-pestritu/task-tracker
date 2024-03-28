import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { TaskService } from '../Services/task.service';
import { Status } from '../status';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.scss'
})
export class AddTaskComponent {
  taskName: string = '';
  taskDescription: string = '';
  

  constructor(private router: Router, private taskService:TaskService) {}

  onSubmit() {
    console.log('Task Title:', this.taskName);
    console.log('Description:', this.taskDescription);
  }

  cancel() {
    this.router.navigate(['/']); 
  }

  addTask() {
    this.taskService.addTask({
      id: (this.taskService.tasks.length + 1).toString(),
      title: this.taskName,
      description: this.taskDescription,
      status: Status.ToDo,
    });
    this.router.navigate(['/']);
  }
}
