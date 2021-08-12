
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
window.onscroll = function() {myFunction()};
        
        var header = document.getElementById("myHeader");
        var sticky = header.offsetTop;
        
        function myFunction() {
          if (window.pageYOffset > sticky) {
            header.classList.add("sticky");
          } else {
            header.classList.remove("sticky");
          }
        }
  
       
      
  })(jQuery);



 // navigation menu 
 function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.width === "25rem") {
      x.style.width = "0";
    } else {
      x.style.width = "25rem";
    }
  }

//   bars menu 
function myFun(x) {
    x.classList.toggle("change");
  }

  