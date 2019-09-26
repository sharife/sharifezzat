// JS Goes here - ES6 supported
if (window.netlifyIdentity) {
  window.netlifyIdentity.on("init", (user) => {
    if (!user) {
      window.netlifyIdentity.on("login", () => {
        document.location.href = "/admin/";
      });
    }
  });
}


$(document).ready(function(){
  alert("here");
  $('.intro1').animate({'opacity':'1', 'margin-left': '0'},1500, 'easeOutExpo');
  $('.intro-page').delay(250).animate({'opacity':'1'},700);
  $('.intro-body').delay(1000).animate({'opacity':'1'},700);
  $('.header-image').animate({'opacity':'1'},1000);
  $('.header-image-sm').animate({'opacity':'1'},1000);
  // $('.intro1').addClass('scaler');
});


$(document).ready(function() {
    /* Every time the window is scrolled ... */
    $(window).scroll( function(){
        /* Check the location of each desired element */
        $('.hideme').each( function(i){
            
            var bottom_of_object = $(this).offset().top + ($(this).outerHeight() * .5);
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                $(this).animate({'opacity':'1', 'padding-top': '-10px'},350);
                    
            }
        });
    });
});