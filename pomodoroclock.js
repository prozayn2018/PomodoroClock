
// enable once done with program

$(document).ready(function(){


  //anyway to make the three repeated code blocks modular ..? research.
  //below functions will send return value to startcount to make sure correct count starts
  //works to return value inside click; cannot technically return value from event handler/trigger
  function twofiveClicked(){
    var b;
    $('#twentyfive').click(function(){
      $(this).data("clicked", 25);
    });

    var b = $("#twentyfive").trigger("click").data("clicked");
    return b;
  };

  function fiveClicked(){
    var c;
    $('#five').click(function(){
      $(this).data("clicked", 5);
    });

    var c = $("#five").trigger("click").data("clicked");
    return c;
  }

  function fifteenClicked(){
    var a;
    $('#fifteen').click(function(){
      $(this).data("clicked", 15);
    });

    var a = $("#fifteen").trigger("click").data("clicked");
    return a;
  }
//global variables here; stored as data(25, 5, 15)
twofive = twofiveClicked()
five = fiveClicked()
fifteen = fifteenClicked()


function timer(){
  //setTimeout
  // think of control flow of execution to understand code
  $("#items").click(function(){
    $(".page-item").each(function(){



    // don't touch
    var add = 59;
    var timer25 = 24;
    //calling above function return values

    //can't call twofiveclicked directly, hence why data is stored above.
    var timerOn = twofive;
    console.log(timerOn)

    // work only 25
    function startCount() {
      if(timerOn == 25){
        timerOn = true;
        twentyfivemin();
      };
    };

    startCount();
      //recursive function; analogous to a loop
      // logic for twentyfive min button
      // no call for twentyfivemin at bottom so it avoids being double called
      //remember calculator double callback issue
    function twentyfivemin(){

      if(add !== 0 && add >= 10 && add < 60 && timer25 !== 0){
      $('#timer').html(timer25 + ':' +add);
      add = add - 1;
    } else if(add == 00 && timer25 !== 0){
      add = 59;
      timer25 = timer25 -1;
      $('#timer').html(timer25 + ':' +add);
    } else if(add !== 0 && add > 0 && add < 10 && timer25 !== 0){
      $('#timer').html(timer25 + ':0' +add);
      add = add - 1;
    };
      // everytime logic is called, set timeout delay's console - log by one second.
      t = setTimeout(twentyfivemin, 1000);
    };
  });
  });

};

timer()

});
