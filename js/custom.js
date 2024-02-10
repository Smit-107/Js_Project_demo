$(document).ready(function(){
    $('#slider1').owlCarousel({
        loop:true,
        margin:10,
        items:1,
        nav:true,
        dots:false,
        navText:['<i class="fa-solid fa-chevron-left"></i>','<i class="fa-solid fa-angle-right"></i>'],
    })


    $("#slider2").owlCarousel({
        items:3,
        // margin:20,
        loop:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true, 
        
        center:true,
        responsive:{
            0:{
                items:1
            },
            300:{
                items:2
            },
            700:{
                items:3,
            }
        }
    })
    
    $("#slider3").owlCarousel({
        items:8,
        loop:true,
        autoplayTimeout:3000,
    });

  });









