// Exemplo de uso de var, let e conste em JavaScript

const externo = "Ola, mundo!";

// Declaração de uma variável usando var

function exemploVar() {
  if (true) {
    var mensagem: "Ola, mundo! Eu sou uma var";
  }
  console.log(mensagem);
}

// Chamando a função exemploVar

exemploVar();

// Exemplo de erro e correção

//var mensagem: "Ola, eu sou o exemplo de uma var global - Escopo Externo";
//console.log(mensagem);

// Declaração de uma variável utilizando let

function exemploLet() {
  if (true) {
    let mensagem: "Ola, eu sou uma let";
    console.log(mensagem);
  }
}

// Chamando a função exemploLet

exemploLet();

// Exemplo de erro e correção

let mensagem2 = "Olá, eu sou uma let externa";
console.log(mensagem2);

// Declaração de uma constante usando const

function exemploConst() {
  const mensagem = "Olá, eu sou uma constante";
  console.log(mensagem);
}

// Chamando a função exemploConst

exemploConst();

// Exemplo externo de const

console.log(externo);

//Exemplo externo - tentar alterar constante global

//externo = "Nova mensagem";
//console.log();


// Chamada de função para exemplificação
//let resultadoSoma = somar(40, 2);
//console.log(resultadoSoma); // Exibe 42

//let resultadoSubtração = subtrair(10, 4);
//console.log(resultadoSubtração); // Exibe 6