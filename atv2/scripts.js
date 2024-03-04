//Escreva um programa que recebe três números e determina qual é o maior deles, usando if, else if e else.
// Pedir ao usuário para inserir três números
 var num1 = parseFloat(prompt("Insira o primeiro número:"));
 var num2 = parseFloat(prompt("Insira o segundo número:"));
 var num3 = parseFloat(prompt("Insira o terceiro número:"));

// Verificar qual número é o maior
 if (num1 >= num2 && num1 >= num3) {
     alert("O primeiro número (" + num1 + ") é o maior.");
 } else if (num2 >= num1 && num2 >= num3) {
     alert("O segundo número (" + num2 + ") é o maior.");
 } else {
     alert("O terceiro número (" + num3 + ") é o maior.");
 }
