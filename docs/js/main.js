$(function(){

	$('.header__slider').slick({
		infinite: true,
		arrows: false,
		dots: true,
	});

/*----------------------------------MixItUp-2---------------------------------*/
	$('#menu-content').mixItUp();

/*----------------------------------Scroll------------------------------------*/	
	$('a[href^="#"]').click(function(){
		var target = $(this).attr('href');
		$('html, body').animate({
			scrollTop: $(target).offset().top
		},800);
	});
/*----------------------------------Tabs-------------------------------------*/
	$('.history__description .history__button').on('click', function(event) {
		var id = $(this).attr('data-id');
		$('.history__description').find('.history__wrap-text').removeClass('active-tab').hide();
		$('.history__description .history__description-head').find('.history__button').removeClass('active');
		$(this).addClass('active');
		$('#'+id).addClass('active-tab').fadeIn();
		return false;
	});

/*----------------------------Custom scrollbar--------------------------------*/
	$('.menu__gallery-content').mCustomScrollbar({
		axis: 'y',      
    	theme: 'light-thin', 
    	scrollInertia: '330',  
   	 	mouseWheel: {
	        deltaFactor: 70
	    }   
	});

	$('.header__content-wrap').mCustomScrollbar({
		axis: 'y',           
    	theme: 'light-thin', 
    	scrollInertia: '250'
	});

	$('.history__content').mCustomScrollbar({
		axis: 'y',       
    	theme: 'light-thin', 
    	scrollInertia: '250'
	});

/*------------------------------Mobile menu----------------------------------*/
	
	$('.mobile__menu').on('click', function(){
		$('.navigation__inner').addClass('active');
		$(this).fadeOut();
	});

	$('.button-close, .navigation__inner-name').on('click', function(){
		$('.navigation__inner').removeClass('active');
		$('.mobile__menu').fadeIn();
	});

});


