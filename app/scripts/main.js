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

		$('.user__club-point__link').on('click', function(e){
			e.preventDefault();
			$('.account-popup--point').addClass('open');
			$('.overlay').fadeIn();
		});

		$('#account__point-no').on('click', function(e){
			e.preventDefault();
			$('.account-popup--point').removeClass('open');
			$('.overlay').fadeOut();
		});

		$('.overlay').on('click', function(e){
			e.preventDefault();
			$('.account-popup').removeClass('open');
			$('.account-popup--point').removeClass('open');
			$('.overlay').fadeOut();
		});
	}());


	// chart-popup
	(function(){
		$('.chart__club-point__link').on('click', function(e){
			e.preventDefault();
			$('.account-popup--point').addClass('open');
			$('.overlay').fadeIn();
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


	// accordion-chart
	(function(){
		$('.chart-training__link').on('click', function(e){
			e.preventDefault();

			var
				$this = $(this),
				container = $this.closest('.chart-training__list'),
				item = $this.closest('.chart-training__item'),
				currentContent = item.find('.chart-training__wrapp'),
				duration = 500;

				// currentContent.slideToggle(duration);


			if(!item.hasClass('active')) {

				item
					.addClass('active')
					.siblings()
					.removeClass('active')
					.find('.chart-training__wrapp')
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

	// tabs-chart
	(function(){
		$('.chart__tabs-item').on('click', function(e){
			e.preventDefault();

			var
				$this = $(this);
				member = $('.chart__content-item');
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

	// slick-chart
	(function(){
		 $('.chart-date-content__list').slick({
	  		slidesToShow: 1,
	  		slidesToScroll: 1,
	  		arrows: false,
	  		fade: true,
	  		asNavFor: '.chart-date__list'
		});
		$('.chart-date__list').slick({
	  		slidesToShow: 1,
	  		slidesToScroll: 1,
	  		swipeToSlide: true,
	  		centerMode: true,
	  		focusOnSelect: true,
	  		arrows: false,
	  		asNavFor: '.chart-date-content__list'
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

