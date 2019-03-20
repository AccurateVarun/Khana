import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },
  { path: 'new-item', loadChildren: './pages/new-item/new-item.module#NewItemPageModule' },
  { path: 'update-item/:id', loadChildren: './pages/update-item/update-item.module#UpdateItemPageModule' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'tableselection', loadChildren: './pages/tableselection/tableselection.module#TableselectionPageModule' },
  { path: 'menu/:id', loadChildren: './pages/menu/menu.module#MenuPageModule' },
  { path: 'menu-group/:id', loadChildren: './pages/menu/menu-group/menu-group.module#MenuGroupPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
