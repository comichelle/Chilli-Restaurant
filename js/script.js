/////////////////////////////////////////
//HAMBURGER MENU
////////////////////////////////////////




// Show & hide navigation
let toggleNav = () => {
    $('.hamburger').on('click', () => {
        $('#nav').toggleClass('hide')
    })
}

// Hide mobile nav on click
let mobileNav = () => {
    let screenSize = $(window).width();
    if (screenSize <= 540) {
        $('#nav').addClass('hide');
        $('.home-nav').on('click', () => {
            $('#nav').toggleClass('hide')
        });
        $('.menu-nav').on('click', () => {
            $('#nav').toggleClass('hide')
        });
        $('.events-nav').on('click', () => {
            $('#nav').toggleClass('hide')
        });
    }
}




$(window).on('resize', function() {
  if ($(window).width() > 540) {
      $('nav').show();
   }
});


mobileNav();
toggleNav();