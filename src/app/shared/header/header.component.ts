import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
 title :string = " My Angular App";
 selectedOption: string = 'def'; // default value for dropdown

 onSelectChange(): void {
   console.log('Selected option:', this.selectedOption);
  
 }

 
constructor(){}

ngOnInit(){

}


}
