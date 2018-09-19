$(document).ready(function() {

  
  new WOW().init();
    $('#eng, #ru').click(function() {
		$('#ru, #eng').toggleClass('change-language__active');
	});


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
    


});



// $('#btnVideoPlay').click(function() {
//     $(this).hide();
//  });
//  $('#videoPlay').click(function() {
//   $('#btnVideoPlay').show();
// });

// var myVideo = document.getElementById("videoPlay"); 

//     function playPause() { 
//         if (myVideo.paused) 
//             myVideo.play(); 
//         else 
//             myVideo.pause(); 
//     } 