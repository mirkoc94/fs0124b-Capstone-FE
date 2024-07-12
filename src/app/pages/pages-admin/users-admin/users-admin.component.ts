import { Component } from '@angular/core';
import { IUser } from '../../../Models/i-user';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-users-admin',
  templateUrl: './users-admin.component.html',
  styleUrl: './users-admin.component.scss'
})
export class UsersAdminComponent {

  users: IUser[] = [];

  constructor(private usersSvc: UsersService) {}

  ngOnInit(): void {
    this.usersSvc.getAllUsers().subscribe(users => this.users = users);
  }

}
