import { Component } from '@angular/core';




@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  tabs: any[];
 personal: any; // Add the 'tabs' property declaration

  constructor() {
    this.tabs = []; // Initialize the 'tabs' property with an empty array or your desired initial value
  }


}
