import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MenuGroupPage } from './menu-group.page';
import { HttpModule } from '@angular/http';

const routes: Routes = [
  {
    path: '',
    component: MenuGroupPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MenuGroupPage]
})
export class MenuGroupPageModule {}
