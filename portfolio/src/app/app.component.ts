import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css','./app.slick.css']
})
export class AppComponent implements OnInit {

  ngOnInit(){
      const totalItems = 3;
      var list = $(".left-section");
      var listItems = list.children(".item");
      list.append(listItems.get().reverse());

      $(".right-section")
        .slick({
          vertical: true,
          verticalSwiping: true,
          arrows: false,
          infinite: true,
          speed: 300,
          cssEase: "cubic-bezier(0.7, 0, 0.3, 1)",
        
          touchThreshold: 20,
          mobileFirst: true,
        })
        .on("beforeChange", function (event, slick, currentSlide, nextSlide) {
          $(".left-section").css("filter", "blur(2px)");
          $(".right-section").css("filter", "blur(2px)");
          if (
            currentSlide > nextSlide &&
            nextSlide == 0 &&
            currentSlide == totalItems - 1
          ) {
            $(".left-section").slick("slickGoTo", -1);
          } else if (
            currentSlide < nextSlide &&
            currentSlide == 0 &&
            nextSlide == totalItems - 1
          ) {
            $(".left-section").slick("slickGoTo", totalItems);
          } else {
            $(".left-section").slick("slickGoTo", totalItems - 1 - nextSlide);
          }

          switch (nextSlide) {
            case 0:
              if (window.innerWidth > 1300) {
               $(".left-section").css("width", "35vw");
                $(".profile-photo-card").css("width", "35vw");
                $("#selfie").css({ "width": "30vw", "height": "30vw", "top": "10vh" });
              } else {
             $(".left-section").css("width", "50vw");
                $(".profile-photo-card").css("width", "50vw");
                $("#selfie").css({ "width": "45vw", "height": "45vw", "top": "5vh" });
              }
              break;
            case 1:
              $(".left-section").css("width", "50vw");
              break;
            case 2:
              if (window.innerWidth > 1300) {
                $(".left-section").css("width", "25vw");
              }
              else {
                $(".left-section").css("width", "50vw");
              }
              break;
          }
        })
        .on("afterChange", function (event, slick, currentSlide, nextSlide) {
          $(".left-section").css("filter", "none");
          $(".right-section").css("filter", "none");
        })
        .on("mousewheel", function (event) {
          event.preventDefault();
          if (event.deltaX < 0 || event.deltaY > 0) {
            $(this).slick("slickPrev");
          } else if (event.deltaX > 0 || event.deltaY < 0) {
            const currentSlide = $(".right-section").slick('slickCurrentSlide');
            if (currentSlide !== totalItems-1) {
              $(this).slick("slickNext");
            }
            else {
              $(".right-section").slick("slickGoTo", 0);
            }
          }
        });

    
      $(".left-section")
        .slick({
          swipe: false,
          vertical: true,
          arrows: false,
          infinite: true,
          speed: 300,
          cssEase: "cubic-bezier(0.7, 0, 0.3, 1)",
          initialSlide: totalItems - 1,

          touchThreshold: 20,
          mobileFirst: true,
        })
        .on("beforeChange", function (event, slick, currentSlide, nextSlide) {
          if (
            currentSlide > nextSlide &&
            nextSlide == 0 &&
            currentSlide == totalItems - 1
          ) {
            $(".right-section").slick("slickGoTo", -1);
          } else if (
            currentSlide < nextSlide &&
            currentSlide == 0 &&
            nextSlide == totalItems - 1
          ) {
            $(".right-section").slick("slickGoTo", totalItems);
          } else {
            $(".right-section").slick("slickGoTo", totalItems - 1 - nextSlide);
          }

        })
        .on("mousewheel", function (event) {
          event.preventDefault();
          if (event.deltaX < 0 || event.deltaY > 0) {
            $(this).slick("slickNext");
          } else if (event.deltaX > 0 || event.deltaY < 0) {
            $(this).slick("slickPrev");
          }
        });
  }

  toSkills() {
    $(".right-section").slick("slickGoTo", 1);
  }

  toProjects() {
    $(".right-section").slick("slickGoTo", 2);
  }
}
