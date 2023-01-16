$(document).ready(function(){

	// header color change
	$(window).on("scroll",function(){
		var scorllDistance = $(window).scrollTop();
		var $header = $(".js-header");
		if (scorllDistance > 80) {
			$header.addClass("header--colored");
		}
		else{
			$header.removeClass("header--colored");
		}
	})

	// wow plugin initialize
	new WOW().init();

	// btn color
	
})