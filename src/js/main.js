//= partials/lightbox.js
//= partials/slick.js

$(document).ready(function(){


	// _______________toggle menu

	$('#toggle__icon').click(function() {  
		$('.toggle__nav').animate({left:0},500); 
		$('.toggle__bg').show();
	})

	$('.toggle__bg').click(function() {
		$('.toggle__nav').animate({left:-200},500);
		$(this).hide(); 
	})


	// _______________slider

		$('.slider').slick({
			dots: false,
			infinite: true,
			speed: 300,
			slidesToShow: 4,
			slidesToScroll: 1,
			responsive: [
			    {
				    breakpoint: 1024,
			    	settings: {
			        slidesToShow: 3,
			        slidesToScroll: 3,
			        infinite: true,
			        dots: true
			    	}
			    },
			    {
			    	breakpoint: 600,
			    	settings: {
			        slidesToShow: 2,
			        slidesToScroll: 2
			    	}
			    },
			    {
			    	breakpoint: 480,
			    	settings: {
			        slidesToShow: 1,
			        slidesToScroll: 1
			    	}
				}
			  ]

		});

	


  });
   



