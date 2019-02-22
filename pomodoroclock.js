

$(document).ready(function(){
  $("#hello").mouseover(function(){
    $('#hello').css('color', 'yellow');
    });

  $("#hello").mouseout(function(){
      $('#hello').css('color', 'black');
    });

    $("button").click(function(){
       $("#div1").fadeIn();
       $("#div2").fadeIn("slow");
       $("#div3").fadeIn(3000);
     });

  });
