import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type AddNewTask } from '../task/task.model';
import { TaskService } from '../tasks.services';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  standalone: true,
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})


export class NewTaskComponent {

  taskService = inject(TaskService);

  @Input({ required: true }) userId!: string;
  @Output() close = new EventEmitter<void>();
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  onCancelClicked() {
    this.close.emit();
  }

  submitAddTask() {
    this.taskService.addTask({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDate
    }, this.userId)
    this.close.emit();
  }
}
