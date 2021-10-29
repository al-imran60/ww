(function($){
  'use strict';

  // code start

$('.menu-icon i').on( 'click', function(){
  $('.menu ul, .cross-icon i').show('slow');
});

$('.cross-icon i').on( 'click', function(){
  $('.menu ul').hide('slow');
});

$(window).resize( function(){
  var screenResize = $(window).width();
  if( screenResize > 991) {
    $('.menu ul').removeAttr('style');
  }
})



}) (jQuery);