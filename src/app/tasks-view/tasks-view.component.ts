import { Component, OnInit } from '@angular/core';
import { TaskGridComponent } from '../task-grid/task-grid.component';
import { Status } from '../status';
import { Task } from '../task';
import { TaskListComponent } from '../task-list/task-list.component';
import {MatIconModule} from '@angular/material/icon';
import { NgFor,NgIf } from '@angular/common';
import { NotificationService } from '../notification.service';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tasks-view',
  standalone: true,
  imports: [TaskGridComponent,TaskListComponent,MatIconModule,NgFor,NgIf, MatSlideToggleModule, FormsModule],
  templateUrl: './tasks-view.component.html',
  styleUrl: './tasks-view.component.scss'
})
export class TasksViewComponent implements OnInit {
    isList;
    tasks: Task[] = [];
    notificationMessage: string;

    constructor(private notificationService: NotificationService) {}

    ngOnInit() {
      this.notificationService.notificationSubject.subscribe(hasNotifications => {
      this.notificationMessage = hasNotifications ? "New notifications, please refresh the page" : "";
    });
  }
}
