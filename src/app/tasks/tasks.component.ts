import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { DUMMY_USERS_TASKS } from '../dummy-users-tasks';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent],
  standalone: true,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({ required: true }) userId!: string
  @Input({ required: true }) name!: string

  tasks = DUMMY_USERS_TASKS

  get selectedUserTask() {
    console.log("select userid  in the Task Component: " + this.userId);
    var selectedTasks = this.tasks.filter((task) => task.userId === this.userId);
    console.log("select task for the user " + selectedTasks);

    return selectedTasks;
  }
}
