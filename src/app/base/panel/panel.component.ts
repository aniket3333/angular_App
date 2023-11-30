import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {
  someDate: Date = new Date();
  someTime: string = '12:30';

  constructor(){}
  ngOnInit(){

  }
}
