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


	// accordion
	(function(){
		$('.history__parameters-link').on('click', function(e){
			e.preventDefault();

			var
				$this = $(this),
				container = $this.closest('.history__parameters-list'),
				item = $this.closest('.history__parameters-item'),
				currentContent = item.find('.history__dropdown-list'),
				duration = 500;

				// currentContent.slideToggle(duration);


			if(!item.hasClass('active')) {

				item
					.addClass('active')
					.siblings()
					.removeClass('active')
					.find('.history__dropdown-list')
					.stop(true, true)
					.slideUp();

				currentContent.stop(true, true).slideDown(duration);
			} else {

				item.removeClass('active');
				currentContent.stop(true, true).slideUp();
			}
		});
	}());


	// tabs
	(function(){
		$('.history__tabs-item').on('click', function(e){
			e.preventDefault();

			var
				$this = $(this);
				member = $('.history__content-item');
				ndx = $this.index();

			console.log(ndx);

			$this
				.addClass('active')
				.siblings()
				.removeClass('active');

			member.eq(ndx)
				.addClass('active')
				.siblings()
				.removeClass('active');
		});
	}());

	// history popup
	(function(){
		var 
			historyPopup  = $('.history-popup'),
			historyCancel = $('.history-popup__btn--cancel');

		$('.history__parameters-title').on('click', function(e){
			e.preventDefault();

			if(!historyPopup.hasClass('open')) {
				historyPopup.addClass('open');
			} else {
				historyPopup.removeClass('open');
			}
		});

		$('.history-popup__btn--cancel').on('click', function(e){
			e.preventDefault();

			historyPopup.removeClass('open');
		});
	}());

});

