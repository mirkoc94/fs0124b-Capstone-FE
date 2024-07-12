import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { ShopComponent } from './shop.component';
import { CardComponent } from '../../../main-components/card/card.component';
import { CreateModule } from '../../../backoffice/create/create.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ShopComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    ShopRoutingModule,
    FormsModule
  ]
})
export class ShopModule { }
