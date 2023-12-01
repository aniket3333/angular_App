import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-score-panel',
  templateUrl: './score-panel.component.html',
  styleUrls: ['./score-panel.component.scss'],
  
})
export class ScorePanelComponent implements OnInit {
  @Input() score: number;
  @Input() currencyValue: number;
  @Input() dateValue: Date;
  @Input() timeValue: string;

  constructor() {}

  // Use the custom pipe in the component
 

  ngOnInit(){

  }
  
}
