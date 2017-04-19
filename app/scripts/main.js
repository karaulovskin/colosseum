$(document).ready(function(){

	// menu-burger
	(function(){
		$('.burger__toggle').on('click', function(e){
			e.preventDefault();
			var
				burger = $('.burger');

			if(!burger.hasClass('open')) {
				burger.addClass('open');
				$('.overlay').fadeIn();
			} else {
				body.removeClass('open');
			};
		});

		$('.overlay').on('click', function(e){
			e.preventDefault();
			$('.burger').removeClass('open');
			$('.overlay').fadeOut();
		});

		$('.burger__close').on('click', function(e){
			e.preventDefault();
			$('.burger').removeClass('open');
			$('.overlay').fadeOut();
		});
	}());


	// account-popup
	(function(){
		$('.training__close').on('click', function(e){
			e.preventDefault();
			$('.account-popup--attention').addClass('open');
			$('.overlay').fadeIn();
		});

		$('#cancel-training-ok').on('click', function(e){
			e.preventDefault();
			$('.account-popup--attention').removeClass('open');
			$('.account-popup--cancel').addClass('open');
		});

		$('#cancel-training-no').on('click', function(e){
			e.preventDefault();
			$('.account-popup--attention').removeClass('open');
			$('.overlay').fadeOut();
		});

		$('#cancel-ok').on('click', function(e){
			e.preventDefault();
			$('.account-popup--cancel').removeClass('open');
			$('.overlay').fadeOut();
		});

		$('#cancel-ok').on('click', function(e){
			e.preventDefault();
			$('.account-popup--cancel').removeClass('open');
			$('.overlay').fadeOut();
		});
	}());

});

