//Crie um programa que verifica se um número é par ou ímpar. Use o operador % (resto da divisão) para fazer essa verificação.
 function verificarParOuImpar(numero) {
     if(numero % 2 === 0) {
         return "O número é par.";
     } else {
         return "O número é ímpar.";
     }
 }

// Solicitar ao usuário para inserir um número
 var numero = prompt("Digite um número:");

// Converter o input do usuário para um número inteiro
 numero = parseInt(numero);

 // Verificar se o número é válido
 if(isNaN(numero)) {
     alert("Por favor, insira um número válido.");
 } else {
     // Chamar a função para verificar se o número é par ou ímpar
     var resultado = verificarParOuImpar(numero);
    
     // Exibir o resultado em um alerta
     alert(resultado);
 }