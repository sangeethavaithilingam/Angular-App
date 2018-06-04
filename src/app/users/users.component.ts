import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { UserService } from 'src/app/users/user.service';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users = [];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.users = this.userService.getUsers();
    
      /*.subscribe((data: User[]) => {
          this.users = data;
        });*/
  }

}