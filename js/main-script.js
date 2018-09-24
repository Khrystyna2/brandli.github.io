$(document).ready(function() {

  
  new WOW().init();


  // $('#eng, #ru').click(function() {
	// 	$('#ru, #eng').toggleClass('change-language__active');
	// });


    //style input
    var $inputs = $(".input-form input, .input-form textarea");

    $inputs.on('focus', function() {
      var $self =  $(this);
      $self.prev().addClass('active');
    });

    $inputs.on('focusout', function() {
      var $self =  $(this);
      $self.val() == "" ? $self.prev().removeClass('active') : "";
    });


  //scroll 
  $('.arrow').click(function() {
		$('body,html').animate({
			scrollTop: $('.block-video, .brand-question').offset().top
		}, 200);
	});


  //menu mob
  $('.menu-btn').on('click', function() {
		$(this).toggleClass('menu-btn_active');
		$('.menu').slideToggle(500);
  });
  
 
    if ($(window).width() <= 600) {
      $('.top-menu').removeClass('wow');
      $('.top-menu').removeClass('fadeInDown');
    }

    $('.slider-first').slick({
      infinite: true,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: true
      // fade: true
    });

    $('.slider-vertical').slick({
      infinite: true,
      autoplay: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: true,
      fade: true
      // vertical: true
    });

    $('.slider-vertical__second').slick({
      infinite: true,
      autoplay: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: true,
      fade: true
      // vertical: true
    });

    $('.image-line').slick({
      infinite: true,
      autoplay: true,
      speed: 800,
      slidesToShow: 6,
      slidesToScroll: 1,
      arrows: false,
      dots: false
    });


});

