import { Component, computed, Input, signal } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  @Input() name!: string;
  @Input() avatar!: string;

  get imagePath() {
    return 'assets/users/' + this.avatar;
  }

  onSelectedUser(){
    console.log('user is clicked');
  }
}
