function maiorMenor(a,b,c,d,e) {
  
  const maior = Math.max(a,b,c,d,e);
  const menor = Math.min(a,b,c,d,e);

  return {maior, menor};
}

function resultadoMaiorMenor(){
  const a = parseInt(document.getElementById("a").value);
  const b = parseInt(document.getElementById("b").value);
  const c = parseInt(document.getElementById("c").value);
  const d = parseInt(document.getElementById("d").value);
  const e = parseInt(document.getElementById("e").value);

  
  resultado = maiorMenor(a, b, c, d, e);

  document.getElementById("resultado1").textContent = `Maior número: ${resultado.maior}`;
  document.getElementById("resultado2").textContent = `Menor número: ${resultado.menor}`;

  console.log(resultado.maior, resultado.menor)
}



function vogal(c){
  var b = 0;

  if (c=='a'||c=='e'||c=='i'||c=='o'||c=='u') {
    b = 1;
  } else {
    b = 0;
  }

  return b;

}

function resultadoVogal() {
  const c = document.getElementById("c").value;

  resultado = vogal(c);
  console.log(resultado);
  var status = " "
  if (resultado.b == 0){
    status = "consoante"
  } else {
    status = "vogal"
  }
  document.getElementById("resultado").textContent = `A letra '${c}' é uma ${status}`;
}


function limites(li, ls){
  let par = [];

  for (let i = li + 1; i < ls; i++) {
    if (i % 2 == 0) {
        par.push(i);
    }
  }
  var soma = 0;

  for (let i = 0; i < par.length; i++) {
    soma = soma + par[i];
  }

  return {soma, par};

}

function resultadoLimites(){
  const li = parseInt(document.getElementById("li").value);
  const ls = parseInt(document.getElementById("ls").value);

  const resultado = limites(li, ls);

  document.getElementById("resultado1").textContent = `Números pares: ${resultado.par}`;
  document.getElementById("resultado2").textContent = `Soma: ${resultado.soma}`;
}


function ordem(a, b, c){
  const maior = Math.max(a,b,c);
  const menor = Math.min(a,b,c);
  const doMeio = [a, b, c].find(value => value != maior && value != menor);

  return {maior, menor, doMeio}
}

function resultadoOrdem() {
  const a = parseInt(document.getElementById("a").value);
  const b = parseInt(document.getElementById("b").value);
  const c = parseInt(document.getElementById("c").value);

  resultado = ordem(a, b, c);

  document.getElementById("resultado1").textContent = `Número maior: ${resultado.maior}`;
  document.getElementById("resultado2").textContent = `Número do meio: ${resultado.doMeio}`;
  document.getElementById("resultado3").textContent = `Número menor: ${resultado.menor}`;


  console.log(resultado.maior, resultado.menor);
}


function positivoNegativo(x){
  
}


function parImpar(x){

}