import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from './task.model';
import { CardComponent } from "../../shared/card/card.component";
import { DatePipe } from '@angular/common';
import { TaskService } from '../tasks.services';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {

  @Input({ required: true }) userTask!: Task;
  @Output() complete = new EventEmitter<string>();

  constructor(private taskService: TaskService) { }
  onTaskComplete() {
    this.taskService.removedTask(this.userTask.id)
    this.complete.emit()
  }

}

