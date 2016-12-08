 $(document).ready(function() {

     var ink_heading = $('.left_text h1').text();
     $('.main_header .container-fluid:eq(1) .nav ').before('<h2 class="nav_head">' + ink_heading + '</h2>');
     $('.nav_head').css("display", "none");
     $(window).scroll(function() {
         console.log($(this).scrollTop());
         if ($(this).scrollTop() >= 27) {
             $('.main_header').addClass("sticky");
             $('.nav_head').css("display", "block");
         } else {
             $('.main_header').removeClass("sticky");
             $('.nav_head').css("display", "none");
         }
     });
     //$('.article_parent').css("display","none");
     
   //pop-up code start
   $('#image-gallery').lightSlider({
                gallery:true,
                item:1,
                thumbItem:9,
                slideMargin: 0,
                speed:500,
                auto:true,
                loop:true,
                onSliderLoad: function() {
                    $('#image-gallery').removeClass('cS-hidden');
                }  
            });
 setTimeout(function(){
      $('.article_parent').hide();
  },50)
   $('.img-article').click(function(){
           $('.article_parent').show();
     });
     $('.popUp-close').click(function(){
           $('.article_parent').hide();
     });
     //pop-up code ends here

 });
