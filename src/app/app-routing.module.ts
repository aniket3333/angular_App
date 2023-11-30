import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseComponent } from './Components/base/base.component';

const routes: Routes = [
  {path:'', redirectTo:'/login',pathMatch:'full'},
  //here we load Login module on empty path  using Lazy loading concept
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  //After login base component will be load
  { path: 'base', component: BaseComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
