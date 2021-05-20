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
		dots: true,
		speed: 400,
		cssEase: "cubic-bezier(0.7, 0, 0.3, 1)",

		touchThreshold: 20,
		mobileFirst: true,
	})
	.on("beforeChange", function (event, slick, currentSlide, nextSlide) {
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
				} else {
					$(".left-section").css("width", "50vw");
				}
				break;
			case 1:
				$(".left-section").css("width", "50vw");
				break;
			case 2:
				$(".left-section").css("width", "10vw");
				break;
		}
	})
	.on("mousewheel", function (event) {
		event.preventDefault();
		if (event.deltaX < 0 || event.deltaY > 0) {
			$(this).slick("slickPrev");
		} else if (event.deltaX > 0 || event.deltaY < 0) {
			$(this).slick("slickNext");
		}
	});

$(".left-section")
	.slick({
		swipe: false,
		vertical: true,
		arrows: false,
		infinite: true,
		speed: 400,
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

function toSkills() {
	$(".right-section").slick("slickGoTo", 1);
}

function toProjects() {
	$(".right-section").slick("slickGoTo", 2);
}

function toProfile() {
	$(".right-section").slick("slickGoTo", 0);
}
