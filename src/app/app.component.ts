import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mon_app';
  constructor() { }


  showSideNav: boolean = false; // Ajoutez la variable showSideNav

  toggleSideNav() {
    this.showSideNav = !this.showSideNav;
  }


  
  
}
