
(function($){

      $(".banner-slider").slick({
          dots: true,
          infinite: true,
          slidesToShow: 1,
          autoplay:true,
          arrows: true,
          responsive: [{ 
              breakpoint: 1024,
              settings: {
                  dots: true,
                  arrows: false,
              } 
          }]
      });
  

      
  })(jQuery);





  