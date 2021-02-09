/* eslint-disable no-unused-vars */
'use strict';
alert('do you think you know me lets get started ^_^');
let counter=0;
let nAme=prompt('Enter yor name first');
let football=prompt('do i like the football ?');
football.toLowerCase();
//console.log(q1);
while (football !== 'yes' && football !== 'y'&& football !== 'no'&& football !== 'n') {
  football=prompt('plz enter right ');
}
if(football==='yes'||football==='y'){
  alert('good you got it');
  counter++;
}
else if(football==='no'||football==='n'){
  alert('ops you faild  lets try another qustion');
}
let programing=prompt('do i like programing ?');
programing.toUpperCase();
//console.log(q2);
while (programing.toUpperCase() !== 'YES' && programing.toUpperCase() !== 'Y'&& programing.toUpperCase() !== 'NO'&& programing.toUpperCase() !== 'N') {
  programing=prompt('plz enter right ');
}
if(programing.toUpperCase() ==='NO'||programing.toUpperCase() ==='N'){
  alert('you right XD');
  counter++;
}
// eslint-disable-next-line no-dupe-else-if
else if(programing.toUpperCase() === 'NO'|| programing.toUpperCase() === 'N'){
  alert('you did not expect that XD');
}
let food=prompt('dose the maqluba is my favarute food ?');
food.toLowerCase();
//console.log(q3);
while (food.toLowerCase() !== 'yes' && food.toLowerCase() !== 'y'&& food.toLowerCase() !== 'no'&& food.toLowerCase() !== 'n') {
  food=prompt('plz enter right ');
}
if(food.toLowerCase()==='yes'||food.toLowerCase()==='y'){
  alert('you are right good');
  counter++;
}else if(food.toLowerCase()==='no'|| food.toLowerCase()==='n'){
  alert('you are faild');
}
let movie=prompt('do i like the action movies');
movie.toUpperCase();
//console.log(q4);
while (movie.toUpperCase() !== 'YES' && movie.toUpperCase() !== 'Y'&& movie.toUpperCase() !== 'NO'&& movie.toUpperCase() !== 'N') {
  movie=prompt('plz enter right ');
}
if(movie.toUpperCase()==='YES'||movie.toUpperCase() ==='Y'){
  alert('good you are right');
  counter++;
}else if(movie.toUpperCase() === 'NO' || movie.toUpperCase() === 'N'){
  alert('false ^_^');
}
let basketball=prompt('do i like my basketball');
basketball.toLowerCase();
//console.log(q5);
while (basketball.toLowerCase() !== 'yes' && basketball.toLowerCase() !== 'y'&& basketball.toLowerCase() !== 'no'&& basketball.toLowerCase() !== 'n') {
  basketball=prompt('plz enter right ');
}
if(basketball.toLowerCase()==='no'||basketball.toLowerCase()==='n'){
  alert('yes i dont like it');
  counter++;

// eslint-disable-next-line no-dupe-else-if
}else if(basketball.toLowerCase() === 'no'&& basketball.toLowerCase() === 'n'){
  alert('no you are wrong');
}
alert(`Thank you ${nAme} and you MARK ${counter} of 5`);
















