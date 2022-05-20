// Desafio 1
function compareTrue(number1, number2) {
  if (number1 === true && number2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) /2 
}

// Desafio 3
function splitSentence(frase) {
  frase2 = frase.split(" ");
  return frase2;
}

// Desafio 4
function concatName(frase) {
  return (frase[frase.length-1] + ", " + frase[0]);
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties * 1);
}

// Desafio 6
function highestCount(numeros) {
  let cont = 0;
  let maior = numeros[0];
  for (let i = 1; i < numeros.length; i += 1){
    if (numeros[i] > maior){
      maior = numeros[i];
    }
  }
  for (let i = 0; i < numeros.length; i += 1){
    if(numeros[i] == maior){
      cont +=1;
    }
  }
  return cont;
}


// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let dCat1 = mouse - cat1;
  let dCat2 = mouse - cat2;
  dCat1 = Math.abs(dCat1);
  dCat2 = Math.abs(dCat2);
  if (dCat1 < dCat2){ return ("cat1")};
  if (dCat2 < dCat1){ return ("cat2")};
  if (dCat1 === dCat2){ return ("os gatos trombam e o rato foge")};
  
}

// Desafio 8
function fizzBuzz(array) {
  let sArray = [];
  for (let i = 0; i < array.length; i += 1){
    if (array[i] % 3 == 0 && array[i] % 5 == 0){
      sArray.push ("fizzBuzz");
      console.log (array[i]);
    } else if ( array[i] % 3 == 0){
        sArray.push ("fizz");
    } else if ( array[i] % 5 == 0){
        sArray.push ("buzz");
      } else {
        sArray.push ("bug!");
      } 
    
    }
    return (sArray);
  }

// Desafio 9
function encode(frase) {
  let newFrase
  newFrase = frase.replace(/a/g, '1');
  frase = newFrase;
  newFrase = frase.replace(/e/g, '2');
  frase = newFrase;
  newFrase = frase.replace(/i/g, '3');
  frase = newFrase;
  newFrase = frase.replace(/o/g, '4');
  frase = newFrase;
  newFrase = frase.replace(/u/g, '5');
  frase = newFrase;
  return newFrase;
  
  
}
function decode(frase) {
  let newNumber
  newNumber = frase.replace(/1/g, 'a');
  frase = newNumber;
  newNumber = frase.replace(/2/g, 'e');
  frase = newNumber;
  newNumber = frase.replace(/3/g, 'i');
  frase = newNumber;
  newNumber = frase.replace(/4/g, 'o');
  frase = newNumber;
  newNumber = frase.replace(/5/g, 'u');
  frase = newNumber;
  return newNumber;
}

// Desafio 10
function techList(tecnologias, name) {
  let newTec = tecnologias.sort();
  let newAr = [];
  if (tecnologias.length == 0) {
    return 'Vazio!';
  }
  for (let index = 0; index < newTec.length; index += 1) {
    newAr.push({
      tech: newTec[index],
      name,
    });
  }
  return newAr;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};