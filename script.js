// PROJETO 1 - A JORNADA DO HERÓI

var prompt = require("prompt-sync")();

//Variáveis e listas---------------------------------------------------------

const textA = (`Você é 'a noiva' Beatrix Kiddo, personagem do filme Kill Bill.\n\nApós uma longa jornada, você é levada por Bill para conhecer um novo mestre. Seu objetivo é ser aprovada na entrevista para aprender com grande mestre Pai Mei a antiga arte secreta do 'Golpe da Morte',\na técnica milenar dos 5 pontos de pressão que explodem o coração — o ataque mortal da 'mamba negra'.\n\nNeste momento, você está diante do lendário mestre e ele quer descobrir se você sabe fazer alguma coisa que presta.\n\nDurante a entrevista, seja cuidadosa com suas respostas.\n\nSempre respeite a importante regra abaixo:`);
const textB = (`\n\t\tEscolha número '1' para responder 'SIM' ou;\n\n\t\tEscolha número '2' para responder 'NÃO'\n\n`);
const warning = (`VOCÊ ERROU! Fique mais atenta! Se continuar a errar em suas respostas, talvez perca um braço...`);
const question1 = (`\n — VOCÊ SABE FALAR CANTONÊS?(Não seja louca de responder que fala japonês). `);
const question2 = (`\n — POSSUI ALGUMA HABILIDADE COM ESPADAS? `);
const question3 = (`\n — TEM EXPERIÊNCIA COM OUTRAS ARMAS? `);
const question4 = (`\n — DOMINA ALGUMA TÉCNICA DE KUNG FU? `);
const question5 = (`\n — PAI MEI TE IMOBILIZOU, VOCÊ CONSEGUIU IMPEDÍ-LO DE DECEPAR SEU BRAÇO ADMITINDO QUE SEU KUNG FU É INFERIOR AO DELE? `);
const final1 = (`\n\tVOCÊ AGIU COMO UMA 'IANQUE' QUE SÓ SABE COMER EM RESTAURANTES E GASTAR O DINHEIRO DO SEU HOMEM”. \n\n\tFUJA ANTES QUE ELE TE MATE.`);
const final2 = (`\n\tSEU SUPOSTO KUNG FU É PATÉTICO. PAI MEI PEDIU UMA DEMONSTRAÇÃO DO QUE SABE E VOCÊ DEMONSTROU COISA NENHUMA!\n\n\tVOLTE PARA SEU BURACO.`);
const final3 = (`\n\tSE ERA TÃO RUIM ASSIM, PORQUE PROCUROU PAI MEI PARA APRENDER ALGO NOVO?\n\n\tVOCÊ FEZ O GRANDE MESTRE PERDER TEMPO. SUMA DAQUI ANTES QUE ELE TE ATAQUE.`);
const final4 = (`\n\tNENHUMA FALHA É PERMITIDA. VOCÊ NÃO ESTÁ PRONTA PARA APRENDER A 'FIVE-POINT-HEART-EXPLODING-TECHINIQUE'.\n\n\tVÁ EMBORA ENQUANTO AINDA PODE.`);
const final5 = (`\n\tVOCÊ ACEITOU QUE É COMO UMA MINHOCA DIANTE DA ÁGUIA.\n\n\tISSO JÁ É UM COMEÇO.\n\n\tPAI MEI DECIDIU TE ACEITAR COMO DISCÍPULA DELE. SEU TREINAMENTO COMEÇA AMANHÃ!`);
const questions = [question1,question2,question3,question4,question5];
let yes = [];
let no = [];
let n = 0

//Background---------------------------------------------------------

console.clear();
console.log(`\n\n\t\tA ENTREVISTA COM PAI MEI\n\n`);
console.log (`\n${textA}\n \n\t${textB}`);
prompt(`Pressione ENTER para começar: `);

//Perguntas---------------------------------------------------------

while (n<5) {
    let answer = (parseInt(prompt(questions[n])));

if (answer == 1) {                                                       // caso as respostas sejam sim
    yes.push(answer);
    n++;
       
} else if (answer == 2) {                                                // caso as respostas sejam não 
    no.push(answer);
    n++; 

} else if (answer !=1 || answer != 2){                                // proteção das respostas para garantir que sejam usados apenas 1 para sim e 2 para não
    console.log (`\n\n\t\t${warning}\n\n${textB}\n`);
} 
   
}

//Exibição do resultado---------------------------------------------------------

prompt(`\n\n\nPressione ENTER para saber o resultado da sua entrevista com Pai Mei: `);
console.clear();

switch (yes.length) {                                      
    case 0:
        console.log(final1);
        break;

        case 1:
        case 2:
        console.log(final2);
        break;

        case 3:
        console.log(final3);
        break;

        case 4:
        console.log(final4);
        break;

        case 5:
        console.log(final5);
        break;
    default:
        break;
}

console.log (`\n\n\n\t\t FIM DA ENTREVISTA COM PAI MEI\n\n`);