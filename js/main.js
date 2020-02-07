 $(document).ready(function(){

        var showHeaderAt = 150;

        var win = $(window),
                body = $('body');

        // Show the fixed header only on larger screen devices

        if(win.width() > 400){

            // When we scroll more than 150px down, we set the
            // "fixed" class on the body element.

            win.on('scroll', function(e){

                if(win.scrollTop() > showHeaderAt) {
                    body.addClass('fixed');
                }
                else {
                    body.removeClass('fixed');
                }
            });

        }

    });

/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "800px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}


jQuery(document).ready(function($) {
"use strict";
$('#customers-testimonials').owlCarousel( {
        loop: true,
        center: true,
        items: 4,
        margin: 50,
        autoplay: false,
        dots:true,
    nav:true,
        autoplayTimeout: 8500,
        smartSpeed: 450,
    navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            1170: {
                items: 3
            }
        }
    });
});
jQuery(document).ready(function($) {
"use strict";
$('#customers-testimonialss').owlCarousel( {
        loop: true,
        center: true,
        items: 4,
        margin: 50,
        autoplay: false,
        dots:true,
    nav:true,
        autoplayTimeout: 8500,
        smartSpeed: 450,
    navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            1170: {
                items: 3
            }
        }
    });
});


jQuery(function(){
         jQuery('#showall').click(function(){
               jQuery('.targetDiv').show();
        });
        jQuery('.showSingle').click(function(){
              jQuery('.targetDiv').hide();
              jQuery('#div'+$(this).attr('target')).show();
        });
});