import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { TaskService } from '../Services/task.service';
import { Status } from '../status';
import { Task } from '../task';
import { NotificationService } from '../notification.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.scss',
  providers: [TaskService]
})
export class AddTaskComponent {
  taskName: string = '';
  taskDescription: string = '';
  taskAssignedTo: string = '';
  

  constructor(private router: Router, private taskService:TaskService, private notificationService:NotificationService) {}

  onSubmit() {
    if (this.taskName && this.taskDescription && this.taskAssignedTo) {
      const newTask = <Task>{
        name: this.taskName,
        description: this.taskDescription,
        assignedTo: this.taskAssignedTo,
        status: Status.ToDo
      };
      this.taskService.addTask(newTask)
      .subscribe(task => {
        this.notificationService.sendMessage("BroadcastMessage", [task])
        this.router.navigate(['/']);
      });
    }
  }
  
  cancel() {
    this.router.navigate(['/']);
  }
  
}
