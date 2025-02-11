import { Component } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUserId?: string;

  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId)!;
  }


  selectEventReceived(id: string) {
    this.selectedUserId = id;
    console.log("selected user id " + id);
  }

}
