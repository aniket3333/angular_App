import { Component, Input, OnInit } from '@angular/core';
import { CustomTimeFormatPipe } from 'src/app/Pipes/custom-time-format.pipe';

@Component({
  selector: 'app-score-panel',
  templateUrl: './score-panel.component.html',
  styleUrls: ['./score-panel.component.scss'],
  
})
export class ScorePanelComponent implements OnInit {
  @Input() score: number;
  @Input() currencyAmount: number;
  @Input() date: Date;
  @Input() time: string; 

  constructor(private customTimeFormatPipe: CustomTimeFormatPipe) {}

  // Use the custom pipe in the component
  getFormattedTime(): string {
    return this.customTimeFormatPipe.transform(this.time);
  }

  ngOnInit(){

  }
  
}
