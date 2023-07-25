//Navigation
$(window).scroll(function(){
	if ($(this).scrollTop() > 100) {
		
		$('.navigation').addClass('fixed-top')
	} else {
		
		$('.navigation').removeClass('fixed-top')
	}
  });


$("#book_btn").click(function(){
    $(".popup-form").show();
});

$("#form-popup-close").click(function(){
    $(".popup-form").hide();
});


var delay = 5000;
setTimeout(function() {
  setInterval(function(){
    $(document).ready(function () {

        $('.popup-form').show();
    
    });
  },6000)
}, delay);


$(".place-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1500,
    margin: 30,
    dots: true,
    loop: true,
    center: true,
    responsive: {
        0:{
            items:1
        },
        576:{
            items:1
        },
        768:{
            items:1
        },
        992:{
            items:1
        }
    }
  });