import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  {path:'', redirectTo:'/login',pathMatch:'full'},
  //here we load Login module on empty path  using Lazy loading concept
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  //After login base component will be load
  { path: 'base',loadChildren: () => import('./base/base.module').then(m => m.BaseModule)  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
