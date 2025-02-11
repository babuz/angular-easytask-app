import { Component, Input } from '@angular/core';
import { Task } from './task.model';
import { TaskService } from '../tasks.services';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {

  @Input({ required: true }) userTask!: Task;

  constructor(private taskService: TaskService) { }

  onTaskComplete() {
    this.taskService.removedTask(this.userTask.id)
  }

}

