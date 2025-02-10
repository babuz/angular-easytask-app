import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from './new-task/new-task.component';
import { DUMMY_USERS_TASKS } from '../dummy-users-tasks';
import { AddNewTask } from './task/task.model';


@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, NewTaskComponent],
  standalone: true,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({ required: true }) userId!: string
  @Input({ required: true }) name!: string
  addNewTask = false;

  tasks = DUMMY_USERS_TASKS

  get selectedUserTask() {
    console.log("select userid  in the Task Component: " + this.userId);
    var selectedTasks = this.tasks.filter((task) => task.userId === this.userId);
    return selectedTasks;
  }

  onAddTask() {
    this.addNewTask = true;
  }

  onTaskCompletedEvent(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  onCancelAddTask() {
    this.addNewTask = false;
  }

  onAddTaskEvent(newTask: AddNewTask) {
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      title: newTask.title,
      dueDate: newTask.dueDate,
      summary: newTask.summary,
      userId: this.userId
    });
    this.addNewTask = false;

  }
}

