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
	// (function(){
	// 	$('.training__close').on('click', function(e){
	// 		e.preventDefault();
	// 		$('.account-popup--attention').addClass('open');
	// 		$('.overlay').fadeIn();
	// 	});

	// 	$('#cancel-training-ok').on('click', function(e){
	// 		e.preventDefault();
	// 		$('.account-popup--attention').removeClass('open');
	// 		$('.account-popup--cancel').addClass('open');
	// 	});

	// 	$('#cancel-training-no').on('click', function(e){
	// 		e.preventDefault();
	// 		$('.account-popup--attention').removeClass('open');
	// 		$('.overlay').fadeOut();
	// 	});

	// 	$('#cancel-ok').on('click', function(e){
	// 		e.preventDefault();
	// 		$('.account-popup--cancel').removeClass('open');
	// 		$('.overlay').fadeOut();
	// 	});

	// 	$('#cancel-ok').on('click', function(e){
	// 		e.preventDefault();
	// 		$('.account-popup--cancel').removeClass('open');
	// 		$('.overlay').fadeOut();
	// 	});

	// 	$('.user__club-point__link').on('click', function(e){
	// 		e.preventDefault();
	// 		$('.account-popup--point').addClass('open');
	// 		$('.overlay').fadeIn();
	// 	});

	// 	$('#account__point-no').on('click', function(e){
	// 		e.preventDefault();
	// 		$('.account-popup--point').removeClass('open');
	// 		$('.overlay').fadeOut();
	// 	});

	// 	$('.overlay').on('click', function(e){
	// 		e.preventDefault();
	// 		$('.account-popup').removeClass('open');
	// 		$('.account-popup--point').removeClass('open');
	// 		$('.overlay').fadeOut();
	// 	});
	// }());


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

			// console.log(ndx);

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

			// console.log(ndx);

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


	// tabs-about
	(function(){
		$('.about__tabs-item').on('click', function(e){
			e.preventDefault();

			var
				$this = $(this);
				member = $('.about__content-item');
				ndx = $this.index();

			// console.log(ndx);

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
	// (function(){
	// 	$('.chart__tabs-link').on('click', function(e){
	// 		e.preventDefault();

	// 		$('.chart-date-content__list').slick({
	// 	  		slidesToShow: 1,
	// 	  		slidesToScroll: 1,
	// 	  		arrows: false,
	// 	  		fade: true,
	// 	  		asNavFor: '.chart-date__list'
	// 		});
	// 		$('.chart-date__list').slick({
	// 	  		slidesToShow: 1,
	// 	  		slidesToScroll: 1,
	// 	  		swipeToSlide: true,
	// 	  		centerMode: true,
	// 	  		focusOnSelect: true,
	// 	  		arrows: false,
	// 	  		asNavFor: '.chart-date-content__list'
	// 		});
	// 	});
	// }());

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


	// parametrs select popup
	(function(){
		var 
			ParPopup  = $('.parameters-popup'),
			historyCancel = $('.parameters-popup__btn--cancel');

		$('.data__link').on('click', function(e){
			e.preventDefault();
			console.log("!!!");

			if(!ParPopup.hasClass('open')) {
				ParPopup.addClass('open');
				console.log("+");
			} else {
				ParPopup.removeClass('open');
			}
		});

		$('.parameters-popup__btn--cancel').on('click', function(e){
			e.preventDefault();

			ParPopup.removeClass('open');
		});
	}());


	// SECTION BUY
	(function(){

		$('.buy__checkbox').on('click', function(e){
			var 
				$this    = $(this),
				item     = $this.closest('.buy__item'),
				label    = item.find('.buy__checkbox'),
				list     = item.closest('.buy__item'),
				checkbox = label.find('.buy__checkbox-input'),
				checked  = $('.buy__checkbox-input:checkbox:checked');

			if(checkbox.is(':checked')) {
                $('.buy__item').removeClass('selected');
                item.addClass('selected');
                // $this.parents('.buy__item').addClass('selected');
            } else {
                //checkbox.parents('.buy__item').removeClass('selected');
            };
		});

	}());


	// SECTION LOGIN
	(function(){

		$('.logo__enter-value').focus(function(){

			var
				keyboard = $('.confirm__keyboard'),
				enter = $('.logo__enter'),
				logo = $('.login__logo');

		  	if(!keyboard.hasClass('active')) {
	  			logo.hide();
	  			enter.addClass('active');
		  		keyboard.addClass('active');
		  	} else {
		  		logo.show();
		  		enter.removeClass('active');
		  		keyboard.removeClass('active');
		  	}
		});

		// $('.login-bg').on('click', function(){

		// 	var
		// 		keyboard = $('.confirm__keyboard'),
		// 		enter = $('.logo__enter'),
		// 		logo = $('.login__logo');

		//   	if(!keyboard.hasClass('active')) {
	 //  			logo.hide();
	 //  			enter.addClass('active');
		//   		keyboard.addClass('active');
		//   	} else {
		//   		logo.show();
		//   		enter.removeClass('active');
		//   		keyboard.removeClass('active');
		//   	}
		// });

	}());


	// CONFIRM LOGIN
	(function(){

		$('.confirm__code-link').focus(function(){

			var
				keyboard = $('.confirm__keyboard'),
				enter = $('.logo__enter'),
				logo = $('.login__logo');

		  	if(!keyboard.hasClass('active')) {
		  		keyboard.addClass('active');
		  	} else {
		  		keyboard.removeClass('active');
		  	}
		});

		// $('.login-bg').on('click', function(){

		// 	var
		// 		keyboard = $('.confirm__keyboard'),
		// 		enter = $('.logo__enter'),
		// 		logo = $('.login__logo');

		//   	if(!keyboard.hasClass('active')) {
	 //  			logo.hide();
	 //  			enter.addClass('active');
		//   		keyboard.addClass('active');
		//   	} else {
		//   		logo.show();
		//   		enter.removeClass('active');
		//   		keyboard.removeClass('active');
		//   	}
		// });

	}());


	// SLICK PARAMETRS

	(function(){
		$('.data__link').on('click', function(e){
			e.preventDefault();

			$('.parameters-popup__list').slick({
				vertical: true,
				verticalSwiping: true,
		  		slidesToShow: 5,
		  		slidesToScroll: 1,
		  		// swipeToSlide: true,
		  		centerMode: true,
		  		// focusOnSelect: true,
		  		arrows: false
			});
		});
	}());

	// SLICK PARAMETRS-DATE
	(function(){
		$('.history__parameters-title').on('click', function(e){
			e.preventDefault();
			
			$('.histor-popup__date-list').slick({
				vertical: true,
				verticalSwiping: true,
		  		slidesToShow: 5,
		  		slidesToScroll: 1,
		  		swipeToSlide: true,
		  		centerMode: true,
		  		focusOnSelect: true,
		  		arrows: false
			});
		});
	}());

	(function(){
		$('#phoneByForm').mask('+7 (000) 000 00 00');
	}());


	//карта
	(function(){
		ymaps.ready(init);

		function init(){
			var myMap = new ymaps.Map("map", {
				center: [55.17500160978003,61.34543654224261],
				zoom: 11,
				controls : []
			});

			// var myPlacemark = new ymaps.GeoObject({
	  //     			geometry: {
		 //        		type: "Point",
		 //        		coordinates: [55.17562681785095,61.30294223610421]
		 //      		}
	  //   		});

			// var myPlacemark = new ymaps.Placemark([55.17562681785095,61.30294223610421]);
		}

	}());

});

