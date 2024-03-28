import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

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

  constructor(private router: Router) {}

  onSubmit() {
    console.log('Task Title:', this.taskName);
    console.log('Description:', this.taskDescription);
  }

  cancel() {
    this.router.navigate(['/']); 
  }
}
