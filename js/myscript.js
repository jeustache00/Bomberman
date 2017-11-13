

  // add variables of players to help move Bomberman without
  // bouncing too much
  var playerLeft = 0;
  var playerTop = 0;


  $(document).keydown(function(e){
    if(e.which == 37) {
    playerLeft -= 25;
    $("#bomberman").css("marginLeft", playerLeft + "px");
  } else if (e.which == 38) {
    playerTop -= 25;
    $("#bomberman").css("marginTop", playerTop + "px");
  } else if (e.which == 39) {
    playerLeft += 25;
    $("#bomberman").css("marginLeft", playerLeft + "px");
  } else if (e.which == 40) {
    playerTop += 25;
    $("#bomberman").css("marginTop", playerTop + "px");
  }
});
