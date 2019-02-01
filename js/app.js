'use strict';

var black = prompt('Hey, What is your name?');
console.log(black);

var game = prompt (black + ', Do you wanna play a game? (in creepy Jig Saw voice')
  .toLowerCase();
console.log(game);

if (game === 'yes') {
  alert('Great');
}else{
  alert('Too Bad!');
}
var dog = prompt('Do I have a dog?');    
console.log (dog);

if (dog === 'yes'){
  alert(' Yes, I do have a dog his name is Gryffindor.');
} else {
  alert('I do have a dog, His name is Gryffindor.');
}

var harryPotter = prompt('I am getting a tattoo sleeve soon, Can you guess the theme?');
console.log(harryPotter);

if (harryPotter == 'Harry Potter'){
  alert ('That is correct!');
} else {
  alert ('It is going to be Harry Potter themed.');
}

var airline = prompt('Do I work for an airline?')
.toLocaleUpperCase();
console.log(airline);

if (airline === 'yes'){
  alert ('That is correct');
} else {
  alert ('I actully work for Alaska Airlines.');
}

var haha = prompt ('Do you want free flights?')
  .toLowerCase();
console.log(haha);

if (haha ==='YES'){
  alert ('Not gunna happen.');
} else {
  alert ('Weird, usually everyone wants free flights');
}

var gotcha = prompt ('Are you sure you did not mean ' + haha +
 ' for the last question?').toUpperCase();
console.log(gotcha);

if (gotcha === 'yes'){
  alert('okay! lets go to mexico. I will pay for everything.');
} else { 
  alert ('You must not like flying.');
}

