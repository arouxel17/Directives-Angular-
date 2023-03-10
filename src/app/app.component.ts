import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title : string;
  
  constructor(){
    this.title = "Bonjour !";
  }

  isAdmin: boolean = true;

  hiddenButton(): void {
    this.isAdmin = !this.isAdmin;
  }
}
