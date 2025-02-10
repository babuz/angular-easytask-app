import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AddNewTask } from '../task/task.model';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  standalone: true,
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})


export class NewTaskComponent {
  @Output() cancel = new EventEmitter<void>();
  @Output() add = new EventEmitter<AddNewTask>();
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  onCancelClicked() {
    this.cancel.emit();
  }

  submitAddTask() {
    var addNewTask: AddNewTask = {
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDate
    };

    this.add.emit(addNewTask);
  }
}
