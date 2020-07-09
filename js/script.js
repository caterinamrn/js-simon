var numCasuali = [];
var arrayNumUtente = [];

while (numCasuali.length < 5) {
  var num = getRandomIntInclusive(1,20);
  console.log(num);
  if (!(isIn(numCasuali,num))) {
    numCasuali.push(num)
  }
}
console.log(numCasuali);

alert("ricorda i seguenti numeri: " + numCasuali);
var timer = setTimeout(function(){
  while (arrayNumUtente.length < numCasuali.length) {
    var numUtente = prompt("inserire uno alla volta i numeri letti");
    arrayNumUtente.push(numUtente);
  }
  console.log("i numeri inseriti sono: ",arrayNumUtente);
  for (var i = 0; i < arrayNumUtente.length; i++) {
    if (arrayNumUtente[i]== numCasuali[i]) {
      console.log("hai scritto il numero corretto");
    }
    else {
      console.log("hai sbagliato");
    }
  }
}, 30000);



// functions
// generatore numeri randomici
function getRandomIntInclusive(min,max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  var result = Math.floor(Math.random()*(max - min +1 )+min);
  return result;
}
// numeri differenti nell'array
function isIn (array,num){
  var i = 0;
  var trovato = false;
  while (i < array.length && trovato == false) {
    if (num == array[i]) {
      trovato = true;
    }
    // console.log(i);
    i++;
  }
  return trovato;
}
