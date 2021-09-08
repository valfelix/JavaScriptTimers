/*Timers Exercise
countdown
Write a function called countdown that accepts a number as a parameter and every 1000 milliseconds 
decrements the value and console.logs it. Once the value is 0 it should log “DONE!” and stop. */

// I couldn't figure out how to individually time each count & how to correctly use clearInterval
// setInterval(countdown, 1000);
function countdown(num){
    for(let counter = num; counter > 0; counter --){
            console.log(counter);
    } console.log('DONE!')
}
countdown(5) // example

//Consulted solution after an hour
function countDown(time){
    let timer = setInterval(function(){
      time--;
      if(time <= 0){
        clearInterval(timer);
        console.log('DONE!');
      }
      else {
        console.log(time);
      }
  
    },1000)
  }
countDown(7)

/* randomGame
Write a function called randomGame that selects a random number between 0 and 1 
every 1000 milliseconds and each time that a random number is picked, add 1 to a counter. 
If the number is greater than .75, stop the timer and console.log the number of tries it took 
before we found a number greater than .75. */

function randomGame(){
  let num;
  let count = 0;
  let counter = setInterval(function(){
    num = Math.random();
    count++;
    console.log(num); 
    if(num > 0.75){
      clearInterval(counter);
      console.log(`It took ${count} times to find a number greater than 0.75.`)
    }
  }, 1000)
}

randomGame()