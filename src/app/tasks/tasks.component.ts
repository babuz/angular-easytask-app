import { Component, Input } from '@angular/core';
import { TaskService } from './tasks.services';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({ required: true }) userId!: string
  @Input({ required: true }) name!: string
  addNewTask = false;

  constructor(private taskService: TaskService) { }

  get selectedUserTask() {
    console.log("select userid  in the Task Component: " + this.userId);
    return this.taskService.getUserTasks(this.userId);
  }

  onAddTask() {
    this.addNewTask = true;
  }

  onClose() {
    this.addNewTask = false;
  }
}

