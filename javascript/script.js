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
  $(this).fadeOut().hide();
  $(".img2").fadeIn().show();
  $(".fade2").toggle("fold").focus();
  });

  $(".img2").click(function() {
    $(".fade2").toggle( "fold" );
    $("#user-input").val('');
    $(this).fadeOut().hide();
    $(".img1").fadeIn().show();
  });

//Wikipedia API Call

  $("#user-input").keypress(function(event){
    var keycode = event.which;
      if(keycode == '13'){

      var search = $("#user-input").val();
      var source = "https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&list=&generator=search&exchars=600&exlimit=10&exintro=1&gsrsearch="+search+"&gsrlimit=10";

      $.ajax({
        type: "GET",
        url: source,
        dataType: "jsonp",
        crossDomain: true,
        success: function(data){
          display(data);
        },
        error: function(error) {
          console.log("error");
        }
      });
    };
  });

function display(data) {
  var pages = data.query.pages
  for(object in pages) {
      $(".results").append('<div class="item"><h6>'+pages[object].title+'</h6><p class="extract">'+pages[object].extract+'</p></div>');
  }
}

});
