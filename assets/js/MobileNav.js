$(function () {
	
	$(".fa").click(function () {

		var $nav = $("#nav-list");

		  if ($nav.css('display') == "none") {

		    $nav.show('slow');

		  } else {

		    $nav.hide('slow');;

		  }

	});

});