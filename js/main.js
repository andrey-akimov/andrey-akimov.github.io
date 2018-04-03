$(document).ready(function() {

	//preloader
	$(window).load(function() { 
		$(".loader_inner").fadeOut(); 
		$(".loader").delay(400).fadeOut("slow"); 
	});


	//slider
	$('.autoplay').slick({
	  slidesToShow: 6,
	  slidesToScroll: 1,
	  autoplay: true,
	  autoplaySpeed: 350,
	  arrows: false,
	  pauseOnHover: false,
	  responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3
        }
      },
    ]
	});

	//fancybox
	$("[data-fancybox]").fancybox({
		buttons : false
	});

	//parallax
	$('.header, .resume, .footer').parallax({imageSrc: 'img/header.jpg'});

	//form
	$('.input__field').focusout(function() {
		if ($(this).val()) {
			$(this).parent().addClass('input--filled');
		} else {
			$(this).parent().removeClass('input--filled');
		}
	});

	//wow
	new WOW().init();

	//.sunglasses
	$('.author').hover(
	function() {
		$('.author__sunglasses').css({'transform': 'translateX(50px)', 'transform': 'translateY(-28px)'});
	},
	function() {
		$('.author__sunglasses').css({'transform': 'translateX(0)', 'transform': 'translateY(0)', 'transform': 'rotate(-5deg)'});
	});


	// menu
	$(".toggle-mnu").click(function() {
		$(this).toggleClass("on");
		$(".nav_mnu").toggleClass("show_mnu");
	});

	// animations in menu
  $('a[href^="#"], a[href^="."]').click( function(){
    var scroll_el = $(this).attr('href');
      if ($(scroll_el).length != 0) {
    $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500);
      }
    return false;
  });

  // Chrome Smooth Scroll
  try {
  	$.browserSelector();
  	if($("html").hasClass("chrome")) {
  		$.smoothScroll();
  	}
  } catch(err) {

  };

  // AJAX form
	$("#form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			alert("Спасибо за заявку! Я свяжусь с вами как можно скорее.");
			$("#form").trigger("reset");
		}).fail(function() {
			alert("Error!");
		});
		return false;
	});
	
});