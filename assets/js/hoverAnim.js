$(function () {

	var $blog = $(".blog a");
	var $resources = $(".resource a");
	
	$blog.hover(function() {
		$(this).find(".title").css({"transform": "translate(0 , 2px)"});
	});

	$blog.mouseout(function() {
		$(this).find(".title").css({"transform": "translate(0 , -2px)"});
	});


/**
	$listNav.each(function() {

		$(this).css({
			opacity: 0,
			width: 0,
			height: 0
		});

	});

	
	$menuNav.click(function () {

		if (hide && !animationRunning) {

			animateTitleIn();

			hide = false;

			$container.css({"border": "2px solid #F9D342"});

		} else if (!hide && !animationRunning) {

			animateOut($listNavArray, limit - 1);

			hide = true;

			$container.css({"border": "0"});

		}



	});
/**
	$container.mouseleave(function () {

		if (!hide && !animationRunning) {

			animateOut($listNavArray, limit - 1);

			hide = true;

			$container.css({"border": "0"});

		}

	});

	function animateIn(elem, n) {

		animationRunning = true;

		if (n === limit) { animationRunning = false; }

		if(elem[n]) {

			$(elem[n]).show().animate({

			"opacity": 1,
			"width": "100%",
			"height": "40px",

			}, 100, "easeOutQuad", function() {

			animateIn(elem, n + 1);

			}

			);
		}
	}

	function animateOut(elem, n) {

		animationRunning = true;

		if (n === -1) { 
			animationRunning = false;

			animateTitleOut();
		}

		if(elem[n]) {

			$(elem[n]).animate({

			"opacity": 0,
			"width": "0px",
			"height": "0px",

			}, 100, "easeInQuad", function (){

			$(elem[n]).hide();
			animateOut(elem, n - 1);

			} 

			);
		}
	}

	function animateTitleIn() {

		var largeur = parseInt($titleNav.css("width")) + 100;
	
		$titleNav.animate({width:largeur}, 200, "swing");	
		$menuNav.animate({width:largeur}, 200, "swing", function (){
		
			animateIn($listNavArray, 0);

		});
	}

	function animateTitleOut() {
	
		$titleNav.animate({width:initLargeur}, 200, "swing");
		$menuNav.animate({width:initLargeur}, 200, "swing");

	} **/
});