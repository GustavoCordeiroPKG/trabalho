// Verificar o nome do mês e imprimir o número de dias correspondente
var numeroDias;

switch (nomeMes) {
    case "janeiro":
    case "março":
    case "maio":
    case "julho":
    case "agosto":
    case "outubro":
    case "dezembro":
        numeroDias = "Esse mês tem 31 dias";
        break;
    case "abril":
    case "junho":
    case "setembro":
    case "novembro":
        numeroDias = "Esse mês tem 30 dias";
        break;
    case "fevereiro":
        numeroDias = "Esse mês tem 28 dias em um ano não bissexto"; // Em um ano não bissexto, fevereiro tem 28 dias
        break;
    default:
        numeroDias = "Mês inválido! Insira um nome de mês válido.";
}

// Exibir o número de dias correspondente em um alerta
alert(numeroDias);