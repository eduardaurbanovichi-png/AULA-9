function saudacao(nome, horario) {
  if (horario === "manhã") {
    return `Bom dia, ${nome}!`;
  } else if (horario === "tarde") {
    return `Boa tarde, ${nome}!`;
  } else if (horario === "noite") {
    return `Boa noite, ${nome}!`;
  } else {
    return "Horário inválido.";
  }
}


function calculadora(num1, num2, operacao) {
  if (operacao === "soma") {
    return num1 + num2;
  } else if (operacao === "subtracao") {
    return num1 - num2;
  } else if (operacao === "multiplicacao") {
    return num1 * num2;
  } else if (operacao === "divisao") {
    return num1 / num2;
  } else {
    return "Operação inválida.";
  }
}


let senha = "Teste123";


function validarSenha() {
  let temNumero = /\d/.test(senha);
  let temMaiuscula = /[A-Z]/.test(senha);
  let tamanhoValido = senha.length >= 8;


  if (temNumero && temMaiuscula && tamanhoValido) {
    return "Senha válida!";
  } else {
    return "Senha inválida!";
  }
}


console.log(validarSenha());




function gerarTabuada(numero) {
  for (let i = 1; i <= 10; i++) {
    let resultado = numero * i;
    console.log(`${numero} x ${i} = ${resultado}`);
  }
}


gerarTabuada(5);




