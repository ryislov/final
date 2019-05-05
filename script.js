$( document ).ready(function() {
    var alterClass = function() {
    var ww = document.body.clientWidth;
    if (ww < 700) {
      $('.test').removeClass('scroll');
    } else if (ww >= 701) {
      $('.test').addClass('scroll');
    };
  };
  $(window).resize(function(){
    alterClass();
  });
  //Fire it when the page first loads:
  alterClass();
});