import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersAdminRoutingModule } from './users-admin-routing.module';
import { UsersAdminComponent } from './users-admin.component';


@NgModule({
  declarations: [
    UsersAdminComponent
  ],
  imports: [
    CommonModule,
    UsersAdminRoutingModule
  ]
})
export class UsersAdminModule { }
