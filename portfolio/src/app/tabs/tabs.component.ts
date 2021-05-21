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
    if ($(".right-section").slick('slickCurrentSlide') !== 0) {
      $(".right-section").slick("slickGoTo", 0);
    }
  }

  toSkills() {
    if ($(".right-section").slick('slickCurrentSlide') !== 1) {
      $(".right-section").slick("slickGoTo", 1);
    }
  }

  toProjects() {
    if ($(".right-section").slick('slickCurrentSlide') !== 2) {
      $(".right-section").slick("slickGoTo", 2);
    }
  }

}
