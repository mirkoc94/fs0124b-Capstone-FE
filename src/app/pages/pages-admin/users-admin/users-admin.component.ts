import { Component } from '@angular/core';
import { IUser } from '../../../Models/i-user';
import { UsersService } from '../../../services/users.service';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'app-users-admin',
  templateUrl: './users-admin.component.html',
  styleUrl: './users-admin.component.scss'
})
export class UsersAdminComponent {

  users: IUser[] = [];
  user: IUser | undefined;

  constructor(private usersSvc: UsersService, private authSvc:AuthService) {}

  ngOnInit() {
    this.usersSvc.getAllUsers().subscribe(user => {
      this.users = user
    });

    this.usersSvc.users$.subscribe(
      user => {
        this.users = user;
      });

    this.authSvc.user$.subscribe(user => {
      this.user = user || undefined;
    })
  }

}
