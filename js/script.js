var numCasuali = [];

while (numCasuali.length < 5) {
  var num = getRandomIntInclusive(1,20);
  console.log(num);
  if (!(isIn(numCasuali,num))) {
    numCasuali.push(num)
  }
}
console.log(numCasuali);


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
