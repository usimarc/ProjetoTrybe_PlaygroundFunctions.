// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck(linha1, linha2, linha3) {
  somaAB = Math.abs(linha1) + Math.abs(linha2)
  somaBC = Math.abs(linha2) + Math.abs(linha3)
  somaAC = Math.abs(linha1) + Math.abs(linha3)

  difAB = Math.abs(linha1) - Math.abs(linha2)
  difBC = Math.abs(linha2) - Math.abs(linha3)
  difAC = Math.abs(linha1) - Math.abs(linha3)

  if ((Math.abs(linha1)) > somaBC || (Math.abs(linha2)) > somaAC || (Math.abs(linha3)) > somaAB){
    return false;
  }
  else if ((Math.abs(linha1)) < difBC || (Math.abs(linha2)) < difAC || (Math.abs(linha3)) < difAB) {
    return false;
  }
  else if ((Math.abs(linha1)) < somaBC && (Math.abs(linha1)) > difBC || (Math.abs(linha2)) < somaAC && (Math.abs(linha2)) > difAC || (Math.abs(linha3)) < somaAB && (Math.abs(linha3)) > direncaAB) {
    return true;
  }  
}

// Desafio 13
function hydrate(string) {
  let numero = 0;
  const numero2 = /\d+/g;
  const numero3 = string.match(numero2);
  const numero4 = numero3.map(str => {
    return Number(str);
  });
  for (let i of numero4) numero += i;
  if (numero === 1) return `${numero} copo de água`;
  if (numero > 0 && numero < 10) return `${numero} copos de água`;


}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
//begin