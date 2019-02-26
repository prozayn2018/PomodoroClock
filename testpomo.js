if(x < Math.abs(x -1)){
  var newNum = 59;
  var change = $('#timer').html(z+ ':' + newNum);
  var x = newNum;
}else if(x > Math.abs(x-1)){
  var newNum = newNum - 1;
  var change = $('#timer').html(z+ ':' + newNum);
  var x = newNum;
  return x;
  }; console.log(x);
};
};


$('#textleft').mouseenter(function(){
  $(this).css("color", "black");
}).mouseleave(function(){
  $(this).css("color", "blue");
});



$("#items").click(function(){
  $(".page-item").each(function(){





    // enable once done with program
    // $(document).ready(function(){

var b = jQuery(this).attr("id");

    //  $("#twentyfive").click(function(){
        //needs to call function that will drop timer by one second when clicked
        //$("#timer").html("7:00")
         //});



    //set timeout as each second gets printed
    //count down 59 to 00
    //recursion might be best used here


    function timer(){

      //returns value inside timer
    let y = $("#timer").html();
    var x = y.slice(3,5);
      //setTimeout
      // think of control flow of execution to understand code
      $("#twentyfive").click(function(){
        var timerOn = false;
        var add = 59;
        var timer25 = 25;
        // undefined
        var t;

        function startCount() {
          if(timerOn == false){
            timerOn = true;
            logic();
          };
        };

        startCount();


          //recursive function; analogous to a loop
        function logic(){
          //adds one second to clock



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
        }
          // everytime logic is called, set timeout delay's console - log by one second.
          t = setTimeout(logic, 1000);
          console.log(timer25);

        }



      });

    };

    timer()



    $('#textleft').mouseenter(function(){
      $(this).css("color", "black");
    }).mouseleave(function(){
      $(this).css("color", "blue");
    });
