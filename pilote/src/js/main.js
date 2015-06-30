$(document).ready(function() {

	var currentPage = 1;

	// Mouse Scroll
	$('body').mousewheel(function(event, delta) {
	    if (delta < 0 ){
	         // $("#nextpage").trigger("click");
	         GetCurrentPage();
	         currentPage++;
	         $('.pagination ul li').eq(currentPage).trigger('click');
	    }
	    else if (delta > 0){
	         // $("#prevpage").trigger("click");
	         GetCurrentPage();
	         currentPage--;
	         $('.pagination ul li').eq(currentPage).trigger('click');
	    }
	 });
	// Arrow Keys
	$("body").keydown(function(e) {
	   if(e.keyCode == 37) { // left
	        // $("#prevpage").trigger("click");
	        GetCurrentPage();
	        currentPage--;
	        $('.pagination ul li').eq(currentPage).trigger('click');
	   }
	   else if(e.keyCode == 39) { // right
	        // $("#nextpage").trigger("click");
	        GetCurrentPage();
	        currentPage++;
	        $('.pagination ul li').eq(currentPage).trigger('click');
	   }
		});

	function showAbout(){
		$(".main").toggleClass("deployed");
		$("#apropos").toggleClass("visible");
	}

	$('.menu').on('click', function () {
		showAbout();
	});

	function GetCurrentPage(){
		currentPage = parseInt($('.pt-trigger.selected').attr('data-goto'));
		console.log(currentPage);
	}

	$('.pagination ul li').on('click', function () {
	    $('.pagination ul li').removeClass('selected');
	    $(this).toggleClass('selected');
	    GetCurrentPage();
	});

});