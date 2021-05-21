import { Component, OnInit, Input } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  @Input() active : string = "";

  constructor() { }

  ngOnInit(): void {
  }

  toProfile() {
    $(".right-section").slick("slickGoTo", 0);
  }

  toSkills() {
    $(".right-section").slick("slickGoTo", 1);
  }

  toProjects() {
    $(".right-section").slick("slickGoTo", 2);
  }

}
