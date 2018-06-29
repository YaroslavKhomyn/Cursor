$(function(){
	$('.slider').slick({
  dots: true,
  arrows: false,
  cssEase: 'linear',
  autoplay:true,
  autoplaySpeed:3000,
});
});

$(function(){document.getElementById("country-1").addEventListener("change", function () {
    document.getElementById('phone').innerHTML = " " + this.value;
  });
});


(function ($) {
      $(function(){
        $('.burger-menu').on('click', function(){
          $(this).closest('.nav-menu').toggleClass('menu-open');
        });
      });
    })(jQuery); 

var h_hght = 60; 
var h_mrg = 0; 
                 
$(function(){
 
    var elem = $('.nav-menu');
    var top = $(this).scrollTop();
     
    if(top > h_hght){
        elem.css('top', h_mrg);
    }           
     
    $(window).scroll(function(){
        top = $(this).scrollTop();
         
        if (top+h_mrg < h_hght) {
            elem.css('top', (h_hght-top));
        } else {
            elem.css('top', h_mrg);
        }
    });
 
});