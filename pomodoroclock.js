// key concepts; setTimeout, Recursive function, jquery event document.


function timer(){


  globalArray = []
  cloneArray = []
  t = 0;

  $(document).on("click", function (event) {

    function work(){

    yes = event.target.id;
    globalArray.push(yes);
    console.log(globalArray)
    y = globalArray.length;
    console.log(y)


    if(y === 2 ){
      clearTimeout(t);
      slice = globalArray.slice(1)
      globalArray = []
      yes = slice;
      work();
    }else if(y <=1 ){
      startCount();
    };
  };

  work();

    function startCount() {

      add = 59;
      timer25 = 0;

      if(yes == 'twentyfive'){
        timer25 = 24;
        twentyfivemin();
      }else if(yes == 'five'){
        timer25 = 4;
        twentyfivemin();
      }else if (yes == 'fifteen') {
        timer25 = 14;
        twentyfivemin();
      }else if(yes == ''){
        clearTimeout(t)
      }
    };
      //recursive function; analogous to a loop

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
      t = setTimeout(function(){twentyfivemin()}, 1000);
    };

  });
};
timer()
