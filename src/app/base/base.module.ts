import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaseRoutingModule } from './base-routing.module';
import { BaseComponent } from './base/base.component';
import { PanelComponent } from './panel/panel.component';
import { ScorePanelComponent } from './score-panel/score-panel.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    BaseComponent,
    PanelComponent,
    ScorePanelComponent,
    
  ],
  imports: [
    CommonModule,
    BaseRoutingModule,
    SharedModule
  ]
})
export class BaseModule { }
