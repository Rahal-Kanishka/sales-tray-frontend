import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss']
})
export class WrapperComponent implements OnInit {

  isExpanded: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }


  public switchSideBar() {
    if (this.isExpanded) {
      this.hideSidebar();
    } else {
      this.expandSidebar();
    }
    this.isExpanded = !this.isExpanded;
  }

  public expandSidebar() {

    const sideBarElement: any = document.getElementById("mySidebar");
    const mainBodyElement: any = document.getElementById("main");

    if (sideBarElement) {
      sideBarElement.style.width = '250px';
    }
    if (mainBodyElement) {
      mainBodyElement.style.marginLeft = "250px";
    }
  }

  public hideSidebar() {
    const sideBarElement: any = document.getElementById("mySidebar");
    const mainBodyElement: any = document.getElementById("main");

    if (sideBarElement) {
      sideBarElement.style.width = '60px';
    }
    if (mainBodyElement) {
      mainBodyElement.style.marginLeft = "60px";
    }

  }

}
