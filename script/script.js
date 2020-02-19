(function(){

$(document).ready(function  (){

	$(document).ready(function(){
      $('.header__carousel--container').bxSlider({
      	auto: true,
      	pause: 4000,
      });
    });

	let button = $(".button");

	button.on("click", function(e) {	
	//do buttona
		if (button.hasClass("button-active") && ("button-after") && ("button-before") ) {
			button.removeClass("button-active button-after button-before");
		} else {
			button.addClass("button-active button-after button-before");
		}

	//do nawigacji
			$("nav").toggleClass("nav__active");
			$(".nav__cover").toggleClass("nav__cover--active")
	});

	$( window ).resize(function() {
		if (window.innerWidth > 768) {
		//do nawigacji
			$("nav").removeClass("nav__active"),
		//do buttona
			$(".button").removeClass("button-active"),
			$(".button").removeClass("button-after");
		}	 	
	});


	// nawigacja mobile
	let window_scrollTop;

	$( window ).scroll(function() {
			    window_scrollTop = $(window).scrollTop();
			let header_scroll =  $(".header"),
			    header_scroll_height = header_scroll.innerHeight(),
				button_container = $(".button__container"),
				button_container_height = button_container.innerHeight();
	
		if ( header_scroll_height - (button_container_height + 70)   < window_scrollTop) {
			button_container.addClass("container__nav--active");		
		}else{
			button_container.removeClass("container__nav--active");
		}		
	});

		$("nav a").click(function(){
			$("nav a").removeClass("nav__menu--active");
			$(this).addClass("nav__menu--active");
		});

		//filter portfolio
		$(".category_item").click(function () {
			 $(".category_item").removeClass("hov");
			 $(this).addClass("hov");

			let category = $(this).attr("id");
			console.log(category);
			   
			if(category == "all"){
				$(".all").addClass("hiden");
				setTimeout(function(){
					$(".all").removeClass("hiden");
				}, 300);
			} else {
				$(".all").addClass("hiden");
				setTimeout(function(){
					$("." + category).removeClass("hiden");
				}, 300);
			}
		});

		//nawigacja pionowa

		$( window ).scroll(function () {
			let nav = $(".nav__list"),
			    header__nav = $('.header__nav');

			if ( 65  < window_scrollTop) {
				nav.addClass("nav__active-desktop");
				header__nav.addClass("header__nav--active");
			
			}else{
				nav.removeClass("nav__active-desktop");
				header__nav.removeClass("header__nav--active");
			}
		});

			/*$(document).scroll(function() {
			    var cutoff = $(window).scrollTop();
			    
			    $('div').each(function(){
			        if($(this).offset().top + $(this).height() > cutoff){
			       
			            $('div').removeClass('current');
			            $(this).addClass('current');
			            return false; // stops the iteration after the first one on screen
			        }
			    });
			});*/

		//show more
		$("a.showMore").on("click", function (e) {
			// body...
			e.preventDefault();

			let that = $(this);
			content = that.prev(".more");

			if (content.is(":hidden")) {
				content.show();
				that.text("Pokaż mniej");

			} else {
				content.hide();
				that.text("Pokaż więcej...");
			}
		});


		//scrlolowanie nawigacji

			let target,	
				$target;


		$("nav a").on("click", function(e) {
				target = this.hash,
				$target =$(target);
				
					//ustalenie wysokosci od sekcji
				 /*function getPosition (){
				 		var $pos;

					if (window.innerWidth > 800) {
						$pos = 0;
					} else{
						$pos= 70;
					}
					  return $pos
					};*/
					
				$('html,body').stop().animate({
					'scrollTop':$target.offset().top/*-getPosition()*/

				},900,'swing', function(){

				});	

		});
		

});

})();