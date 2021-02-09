/* eslint-disable no-unused-vars */
'use strict';
alert('do you think you know me lets get started ^_^');
let counter=0;
let nAme=prompt('Enter yor name first');
let q1=prompt('do i like the football ?');
q1.toLowerCase();
//console.log(q1);
if(q1==='yes'||q1==='y'){
  alert('good you got it');
  counter++;
}
else{
  alert('ops you faild  lets try another qustion');
}
let q2=prompt('do i like programing ?');
q2.toUpperCase();
//console.log(q2);
if(q2==='NO'||q2==='N'){
  alert('you right XD');
  counter++;
}
else{
  alert('you did not expect that XD');
}
let q3=prompt('dose the maqluba is my favarute food ?');
q3.toLowerCase();
//console.log(q3);
if(q3==='yes'||q3==='y'){
  alert('you are right good');
  counter++;
}else{
  alert('you are faild');
}
let q4=prompt('do i like the action movies');
q4.toUpperCase();
//console.log(q4);
if(q4==='YES'||q4==='Y'){
  alert('good you are right');
  counter++;
}else{
  alert('false ^_^');
}
let q5=prompt('do i like my basketball');
q5.toLowerCase();
//console.log(q5);
if(q5==='no'||q5==='n'){
  alert('sure i dont like it');
  counter++;

}else{
  alert('you are wrong');
}
alert(`Thank you ${nAme} and you MARK ${counter} of 5`);
















