const totalItems = 2;

// let rightItems = $(".item .right-section").toArray();
// let reverseItems = rightItems.reverse();
// $(".right-section").empty();
// for (i = 0; i < totalItems; i++) {
// 	$(reverseItems[i]).appendTo($(".right-section"));
// }
var list = $(".left-slider");
var listItems = list.children(".item");
list.append(listItems.get().reverse());

$(".right-slider")
	.slick({
		vertical: true,
		verticalSwiping: true,
		arrows: false,
		infinite: true,
		dots: true,
		speed: 950,
		cssEase: "cubic-bezier(0.7, 0, 0.3, 1)",

		touchThreshold: 20,
	})
	.on("beforeChange", function (event, slick, currentSlide, nextSlide) {
		if (
			currentSlide > nextSlide &&
			nextSlide == 0 &&
			currentSlide == totalItems - 1
		) {
			$(".left-slider").slick("slickGoTo", -1);
		} else if (
			currentSlide < nextSlide &&
			currentSlide == 0 &&
			nextSlide == totalItems - 1
		) {
			$(".left-slider").slick("slickGoTo", totalItems);
		} else {
			$(".left-slider").slick("slickGoTo", totalItems - 1 - nextSlide);
		}
	})
	.on("mousewheel", function (event) {
		event.preventDefault();
		if (event.deltaX > 0 || event.deltaY < 0) {
			$(this).slick("slickPrev");
		} else if (event.deltaX < 0 || event.deltaY > 0) {
			$(this).slick("slickNext");
		}
	});
// .on("mousedown touchstart", function () {
// 	dragging = true;
// 	tracking = $(".slick-track", $slider).css("transform");
// 	tracking = parseInt(tracking.split(",")[5]);
// 	rightTracking = $(".slideshow-right .slick-track").css("transform");
// 	rightTracking = parseInt(rightTracking.split(",")[5]);
// })
// .on("mousemove touchmove", function () {
// 	if (dragging) {
// 		newTracking = $(".slideshow-left .slick-track").css("transform");
// 		newTracking = parseInt(newTracking.split(",")[5]);
// 		diffTracking = newTracking - tracking;
// 		$(".slideshow-right .slick-track").css({
// 			transform:
// 				"matrix(1, 0, 0, 1, 0, " +
// 				(rightTracking - diffTracking) +
// 				")",
// 		});
// 	}
// })
// .on("mouseleave touchend mouseup", function () {
// 	dragging = false;
// });

$(".left-slider").slick({
	swipe: false,
	vertical: true,
	arrows: false,
	infinite: true,
	speed: 950,
	cssEase: "cubic-bezier(0.7, 0, 0.3, 1)",
	initialSlide: totalItems - 1,

	touchThreshold: 20,
});
