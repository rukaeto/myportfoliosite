$(function(){
  $('.gnav-link').click(function(){
    var id = $(this).attr('href');
    var position = $(id).offset().top;
    $('html,body').animate({
      'scrollTop':position
    },500);

  $('.homegnav-link').click(function(){
    $('html,body').animate({
      'scrollTop': 0
    }, 500);
  });

});


























});
  



























