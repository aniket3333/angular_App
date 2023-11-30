import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseComponent } from './base/base.component';
import { PanelComponent } from './panel/panel.component';

const routes: Routes = [
  {path:'',
  component:BaseComponent,
  children:[
    {path:'',redirectTo:'/base/panel',pathMatch:'full'},
{path:'panel',component:PanelComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaseRoutingModule { }
