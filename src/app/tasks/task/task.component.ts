import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({ required: true }) userTask!: Task;
  @Output() complete = new EventEmitter<string>();

  onTaskComplete() {
    this.complete.emit(this.userTask.id);
  }

}

