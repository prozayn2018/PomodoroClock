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



    function twofiveClicked(){
      var a;
      $('.page-link').click(function(e){
        var attr = $(this).attr('id');
        console.log(attr)
        $(this).data("clicked", 25);
      });

      var a = $(".page-link").trigger("click").data("clicked");
      return a;
    }
    //global variables here; stored as data(25, 5, 15)
    twofive = twofiveClicked()

    // enable once done with program
    // $(document).ready(function(){

var b = jQuery(this).attr("id");

$("#twentyfive").click(function(){
  var be = $(this).attr('id');
  alert('clicked!')
  console.log(be +':ID');
});
};


function fiveClicked(){
  var c;
  $("#twentyfive, #five, #fifteen").click(function () {
 if (this.id == 'twentyfive') {
    alert('twentyfive clicked');
 }
 else if (this.id == 'five') {
    alert('five clicked');
 }
});
}

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



    function twofiveClicked(){
      var a;
      var b = 0;
      $('a').on('click', function(event){
        var attr = $(this).attr('id');
        console.log(attr)
        $(this).data("clicked", attr);
        b = true;
      });

      var a = $("a").trigger("click").data("clicked");
      return a;
    }



    $(document).on("click", function (event) {
        var yes = event.target.id
        console.log(yes)
    });


    if(y ==2 ){
      clearTimeout(t);
      globalArray = []
      startCount()
    }
