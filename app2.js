(function(){
  
  let screen = document.querySelector('.screen');
  let buttons = document.querySelectorAll('.btn');
  let clear = document.querySelector('.btn-clear');
  let equal = document.querySelector('.btn-equal');
  let eqn = ""; // declare eqn to store equation as string
  
  buttons.forEach(function(button){
    button.addEventListener('click', function(e){
      let value = e.target.dataset.num;
      if(value === "+" || value === "-" || value === "*" || value === "/"){
        screen.value = '';
        screen.value = value;
      }else{
        screen.value += value;
      }
      
      eqn+=value; // concatenate value to become a single string of an equation
    })
  });
  
  equal.addEventListener('click', function(e){
    if(screen.value === ''){
      screen.value = 'Please Enter a Value';
    } else {
      let answer = eval(eqn); // evaluate the equation
      screen.value = ''; // clear the displayed equation
      eqn=''; // clear current stored equation
      screen.value += answer; //display answer
      eqn += screen.value; //assign current displayed value to equation
    }
  })
  
  clear.addEventListener('click', function(e){
    screen.value = '';
    eqn = '';
    // screen.value = 0;

  })
  
})();
