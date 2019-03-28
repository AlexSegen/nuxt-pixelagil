import fancybox from 'fancybox'
jQuery(document).ready(function() {
    //Smooth Scrolling
    $(function() {
        // This will select everything with the class smoothScroll
        // This should prevent problems with carousel, scrollspy, etc...
        $('.smoothScroll').click(function() {
          if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
              $('html,body').animate({
                scrollTop: target.offset().top
              }, 1000); // The number here represents the speed of the scroll in milliseconds
              return false;
            }
          }
        });
      });
    //Bootstrap tooltip
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })
});

window.onload = function() {
    $(".loader").addClass("hidden");
};

/* function footer_Absolute() {
    var footer = $('footer').innerHeight();
    $('html').css({'position':'relative', 'min-height':'100%'});
    //$('body').css({'margin-bottom': footer + 30 +'px'});
    $('footer').css({'position': 'absolute', 'bottom':'0', 'width': '100%'});
}
footer_Absolute(); */