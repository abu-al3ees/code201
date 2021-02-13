/* eslint-disable no-unused-vars */
'use strict';
alert('do you think you know me lets get started ^_^');
let counter=0;
let username=prompt('Enter yor name first');
let football=prompt('do i like the football ?');
football=football.toLowerCase();

function qustion1 (){
  while (football !== 'yes' && football !== 'y'&& football !== 'no'&& football !== 'n') {
    football=prompt('plz enter right answer ');
  }
  if(football==='yes'||football==='y'){
    alert('good you got it');
    counter++;
  }
  else if(football==='no'||football==='n'){
    alert('ops you faild  lets try another qustion');
  }}
qustion1 (football);
let programing=prompt('do i like programing ?');
programing=programing.toUpperCase();

function question2(){
  while (programing.toUpperCase() !== 'YES' && programing.toUpperCase() !== 'Y'&& programing.toUpperCase() !== 'NO'&& programing.toUpperCase() !== 'N') {
    programing=prompt('plz enter right answer');
  }
  if(programing.toUpperCase() ==='NO'||programing.toUpperCase() ==='N'){
    alert('you right XD');
    counter++;
  }
  // eslint-disable-next-line no-dupe-else-if
  else if(programing.toUpperCase() === 'YES'|| programing.toUpperCase() === 'Y'){
    alert('fales you did not expect that XD');
  }
}question2(programing);
let food=prompt('dose the maqluba is my favarute food ?');
food=food.toLowerCase();

function qustion3(){
  while (food.toLowerCase() !== 'yes' && food.toLowerCase() !== 'y'&& food.toLowerCase() !== 'no'&& food.toLowerCase() !== 'n') {
    food=prompt('plz enter right answer ');
  }
  if(food.toLowerCase()==='yes'||food.toLowerCase()==='y'){
    alert('you are right good');
    counter++;
  }else if(food.toLowerCase()==='no'|| food.toLowerCase()==='n'){
    alert('you are faild');
  }
}
qustion3(food);
let movie=prompt('do i like the action movies');
movie=movie.toUpperCase();

function qustion4(){
  while (movie.toUpperCase() !== 'YES' && movie.toUpperCase() !== 'Y'&& movie.toUpperCase() !== 'NO'&& movie.toUpperCase() !== 'N') {
    movie=prompt('plz enter right answer answer');
  }
  if(movie.toUpperCase()==='YES'||movie.toUpperCase() ==='Y'){
    alert('good you are right');
    counter++;
  }else if(movie.toUpperCase() === 'NO' || movie.toUpperCase() === 'N'){
    alert('false ^_^');
  }}
qustion4(movie);

let basketball=prompt('do i like my basketball');
basketball=basketball.toLowerCase();

function qustion5(){
  while (basketball.toLowerCase() !== 'yes' && basketball.toLowerCase() !== 'y'&& basketball.toLowerCase() !== 'no'&& basketball.toLowerCase() !== 'n') {
    basketball=prompt('plz enter right answer');
  }
  if(basketball.toLowerCase()==='no'||basketball.toLowerCase()==='n'){
    alert('yes i dont like it');
    counter++;

    // eslint-disable-next-line no-dupe-else-if
  }else if(basketball.toLowerCase() === 'yes'&& basketball.toLowerCase() === 'y'){
    alert('no you are wrong');
  }}
qustion5(basketball);


let gessmyage=prompt('can you gess my age');
gessmyage=parseInt(gessmyage);
// eslint-disable-next-line no-undef
function qustion6(){
  let flag=true;
  for (let index = 1; index <= 4; index++) {
    if(parseInt(gessmyage)===23){
      alert('you are right');
      counter++;
      flag=false;
      break;
    }else if(gessmyage>23){
      alert('too high');
    }else if(gessmyage<23){
      alert('too low');
    }
    gessmyage=prompt('not correct gess again plz');

  }

  if(flag){
    alert('you faild the right answer is 23');
  }
}qustion6(gessmyage);
let favcolors=['red','black','white','green','blue','yellow'];
let found=false;
let mycolor;
function question7(){
  for(let i=1;i<=6;i++){
    mycolor=prompt('can you gess my color?');

    for(let j=0; j < favcolors.length; j++){
      if(mycolor===favcolors[j]){
        found=true;
        alert('you win');
        counter++;
        break;
      }
    }
    if(found===true){
      alert('the right answer  '+favcolors);
      break;
    }
  }
}
question7(mycolor);
alert(`Thank you ${username} and you MARK ${counter} of 7`);






















