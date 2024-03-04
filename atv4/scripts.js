//Crie um programa que recebe um número de 1 a 7 e imprime o dia da semana correspondente (1 - Domingo, 2 - Segunda, ..., 7
 //Solicitar ao usuário que insira um número de 1 a 7
 var numero = parseInt(prompt("Insira um número de 1 a 7:"));

 // Verificar o número e imprimir o dia da semana correspondente
 var diaSemana;

 switch(numero) {
     case 1:
       diaSemana = "Domingo";
         break;
     case 2:
         diaSemana = "Segunda-feira";
         break;
     case 3:
         diaSemana = "Terça-feira";
        break;
     case 4:
         diaSemana = "Quarta-feira";
         break;
     case 5:
         diaSemana = "Quinta-feira";
         break;
     case 6:
        diaSemana = "Sexta-feira";
         break;
    case 7:
        diaSemana = "Sábado";
         break;
     default:
         diaSemana = "Número inválido! Insira um número de 1 a 7.";
 }

// Exibir o dia da semana correspondente em um alerta
 alert(diaSemana);
