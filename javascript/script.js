$(document).ready(function(){

  // Random Button Fade Effect
  $(".button1").mouseover(function(){
    $(this).children(".hover1").fadeIn().show();
  });

  $(".button1").mouseleave(function(){
    $(this).children(".hover1").fadeOut();
  });

  //Search Button Fold Effect

  $(".img1").click(function() {
  $(".fade2").toggle( "fold" );
});
});
