// key concepts; setTimeout, Recursive function, jquery event document.


function timer(){


  globalArray = []
  cloneArray = []

  $(document).on("click", function (event) {

    var yes = event.target.id
    globalArray.push(yes);
    console.log(globalArray)
    y = globalArray.length
    console.log(y)

    if(y ==2 ){
      slice = globalArray.slice(1)
      clearTimeout(t);
      globalArray = []

    }else if(y == 1){

    // don't touch, for twentyfive
    var add = 59;
    var timer25 = 0;
    // add / timer for five min
    var timerOn = 25;
    // work only 25
    function startCount() {
      if(yes == 'twentyfive'){
        timer25 = 25;
        twentyfivemin();
      }else if(yes == 'five'){
        timer25 = 4;
        twentyfivemin();
      }else if (yes == 'fifteen') {
        timer25 = 15;
        twentyfivemin();
      }
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
   };
  });
};
timer()
