$(document).ready(function() {

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

    new WOW().init();

});