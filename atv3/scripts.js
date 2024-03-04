
//Faça um programa que verifica se uma senha armazenada na variável SENHA é válida. A senha é válida se tiver pelo menos 8 caracteres e conter pelo menos uma letra maiúscula, uma letra minúscula e um número.
// Definindo a senha
 var SENHA = prompt  ("digite a sua senha");
 // Função para verificar se a senha é válida
 function verificarSenha(senha) {
    // Verificar se a senha tem pelo menos 8 caracteres
  if (senha.length < 8) {
         return false;
    }

     // Verificar se a senha contém pelo menos uma letra maiúscula, uma letra minúscula e um número
     var temMaiuscula = false;
     var temMinuscula = false;
     var temNumero = false;

     for (var i = 0; i < senha.length; i++) {
         var caractere = senha.charAt(i);

         if (caractere >= "A" && caractere <= "Z") {
            temMaiuscula = true;
         } else if (caractere >= "a" && caractere <= "z") {
             temMinuscula = true;
         } else if (!isNaN(parseInt(caractere))) {
             temNumero = true;
         }
    }

     // Retorna true se a senha atender a todos os critérios, caso contrário, retorna false
     return temMaiuscula && temMinuscula && temNumero;
 }

 // Verificar se a senha é válida e exibir o resultado em um alerta
 if (verificarSenha(SENHA)) {
     alert("A senha é válida!");
 } else {
     alert("A senha não é válida. Certifique-se de que tenha pelo menos 8 caracteres, incluindo pelo menos uma letra maiúscula, uma letra minúscula e um número.");
 }