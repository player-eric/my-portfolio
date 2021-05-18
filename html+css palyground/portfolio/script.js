const totalItems = 2;

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
		speed: 400,
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

$(".left-slider").slick({
	swipe: false,
	vertical: true,
	arrows: false,
	infinite: true,
	speed: 400,
	cssEase: "cubic-bezier(0.7, 0, 0.3, 1)",
	initialSlide: totalItems - 1,

	touchThreshold: 20,
});
