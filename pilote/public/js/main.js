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


		$('.menu').on('click', function(){
			$('.main').addClass('deployed');
			$(this).addClass('hide');
			$('#apropos').addClass('visible');
		});

		$('body').on('click', '.deployed', function() {
			$('.main').removeClass('deployed');
			$('#apropos').removeClass('visible');
			$('.menu').removeClass('hide');
		});

	// function showAbout(){
	// 	$(".main").toggleClass("deployed");
	// 	$("#apropos").toggleClass("visible");
	// }
	//
	// $('.menu').on('click', function () {
	// 	showAbout();
	// });

	function GetCurrentPage(){
		currentPage = parseInt($('.pt-trigger.selected').attr('data-goto'));
	}

	$('.pagination ul li').on('click', function () {
	    $('.pagination ul li').removeClass('selected');
	    $(this).toggleClass('selected');
	    GetCurrentPage();
	});

	 $(".animsition").animsition({

	    inClass               :   'fade-in-left-sm',
	    outClass              :   'fade-out-right-sm',
	    inDuration            :    500,
	    outDuration           :    500,
	    linkElement           :   '.animsition-link',
	    // e.g. linkElement   :   'a:not([target="_blank"]):not([href^=#])'
	    loading               :    true,
	    loadingParentElement  :   'body', //animsition wrapper element
	    loadingClass          :   'animsition-loading',
	    unSupportCss          : [ 'animation-duration',
	                              '-webkit-animation-duration',
	                              '-o-animation-duration'
	                            ],
	    overlay               :   false,
	    overlayClass          :   'animsition-overlay-slide',
	    overlayParentElement  :   'body'
	  });

});
