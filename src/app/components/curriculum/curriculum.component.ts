import { Component, OnInit } from '@angular/core';
import { DarkModeService } from 'src/app/services/dark-mode.service';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.css']
})
export class CurriculumComponent implements OnInit {
  selectedTab: string = 'Tab 1';
  public checkBoxValue: boolean = false;

  constructor(public darkModeService: DarkModeService) {}
  sidebarVisible: boolean = false;
  ngOnInit(): void {
    
  }
  toggleDarkMode() {
    this.darkModeService.toggleDarkMode();
  }


  selectTab(tab: string) {
    this.selectedTab = tab;
}

checkCheckbox() {
  this.checkBoxValue = true;
}

goToPreviousTab() {
  if (this.selectedTab === 'Tab 1') {
    
  } else if (this.selectedTab === 'Tab 2') {
    this.selectedTab = 'Tab 1';
  } else if (this.selectedTab === 'Tab 3') {
    this.selectedTab = 'Tab 2';
  } else if (this.selectedTab === 'Tab 4') {
    this.selectedTab = 'Tab 3';
  } else if (this.selectedTab === 'Tab 5') {
    this.selectedTab = 'Tab 4';
  } else if (this.selectedTab === 'Tab 6') {
    this.selectedTab = 'Tab 5';
  }
   
 
  
}
goToNextTab() {
  if (this.selectedTab === 'Tab 1') {
    this.selectedTab = 'Tab 2';
  } else if (this.selectedTab === 'Tab 2') {
    this.selectedTab = 'Tab 3';
  } else if (this.selectedTab === 'Tab 3') {
    this.selectedTab = 'Tab 4';
  } else if (this.selectedTab === 'Tab 4') {
    this.selectedTab = 'Tab 5';
  } else if (this.selectedTab === 'Tab 5') {
    this.selectedTab = 'Tab 6';
  } else if (this.selectedTab === 'Tab 6') {
    
  }
  
  this.checkCheckbox();
}



}
