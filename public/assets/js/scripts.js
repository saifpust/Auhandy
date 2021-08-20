
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
  
// sticky header 
  
  $(window).scroll(function() {

    if ($(window).scrollTop() > 56 ){
      $("#myHeader").addClass("sticky");
    } 
    else {
      $("#myHeader").removeClass("sticky");
    }


  }); 
        
  
    $(window).scroll(function() {

        if ($(window).scrollTop() > 180 ){
          $("#myHeader-2").addClass("sticky-top");
        } 
        else {
          $("#myHeader-2").removeClass("sticky-top");
        }
      
      if ($(window).scrollTop() > 182 ){
          $("#myHeader-2").addClass("sticky-header");
        } 
        else {
          $("#myHeader-2").removeClass("sticky-header");
        }
    }); 


  })(jQuery);



 // navigation menu 
 function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.width === "70%") {
      x.style.width = "0";
    } else {
      x.style.width = "70%";
    }
  }

//   bars menu 
function myFun(x) {
    x.classList.toggle("change");
  }

