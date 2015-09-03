$.lazyLoadXT.scrollContainer = '.project';
$.lazyLoadXT.onload.addClass = 'animated slideInUp';

$(document).ready(function() {

 $(window).lazyLoadXT();

	var currentPage = 1;

	// Mouse Scroll
	$('body').mousewheel(function(event, delta) {
	    if (delta > 0 ){
        console.log(currentPage);
        if (currentPage == 1){
          $('.pagination ul li').eq(9).trigger('click');
          $('.js-pj-nb').text('0'+currentPage);
        }
        else{
          GetCurrentPage();
         currentPage--;
         $('.pagination ul li').eq(currentPage).trigger('click');
          $('.js-pj-nb').text('0'+currentPage);
        }
	    }
	    else if (delta < 0){
        GetCurrentPage();
        if (currentPage == 9){
          $('.pagination ul li').eq(1).trigger('click');
          $('.js-pj-nb').text('0'+currentPage);
        }
        else{
          currentPage++;
         $('.pagination ul li').eq(currentPage).trigger('click');
          $('.js-pj-nb').text('0'+currentPage);
        }
	    }
	 });
	// Arrow Keys
	$("body").keydown(function(e) {
	   if(e.keyCode == 37) { // left
          console.log(currentPage);
          if (currentPage == 1){
            $('.pagination ul li').eq(9).trigger('click');
            $('.js-pj-nb').text('0'+currentPage);
          }
          else{
            GetCurrentPage();
  	        currentPage--;
  	        $('.pagination ul li').eq(currentPage).trigger('click');
            $('.js-pj-nb').text('0'+currentPage);
          }
	   }
	   else if(e.keyCode == 39) { // right
	        GetCurrentPage();
          if (currentPage == 9){
            $('.pagination ul li').eq(1).trigger('click');
            $('.js-pj-nb').text('0'+currentPage);
          }
          else{
            currentPage++;
  	        $('.pagination ul li').eq(currentPage).trigger('click');
            $('.js-pj-nb').text('0'+currentPage);
          }
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
	    loadingParentElement  :   'html', //animsition wrapper element
	    loadingClass          :   'animsition-loading',
	    unSupportCss          : [ 'animation-duration',
	                              '-webkit-animation-duration',
	                              '-o-animation-duration'
	                            ],
	    overlay               :   false,
	    overlayClass          :   'animsition-overlay-slide',
	    overlayParentElement  :   'body'
	  });

		$(".bg").interactive_bg({
	   strength: 25,
	   scale: 1,
	   animationSpeed: "100ms",
	   contain: true,
	   wrapContent: false
	 });

});
