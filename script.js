// PROJETO 1 - A JORNADA DO HERÓI

var prompt = require("prompt-sync")();

//Variáveis e listas---------------------------------------------------------

const textA = (`Agora você é Beatrix Kiddo — 'a noiva' —, personagem do filme Kill Bill.\n\nSeu objetivo é ser aprovada na entrevista para aprender com grande mestre Pai Mei a antiga arte secreta do 'Golpe da Morte',\na técnica milenar dos 5 pontos de pressão que explodem o coração — o ataque mortal da 'mamba negra'.\n
O treinamento é mortalmente rigoroso. Esteja preparada para sofrer.\n
Neste momento, você está diante do lendário mestre, participando da entrevista com ele. Pai Mei quer descobrir se você sabe fazer alguma coisa que presta.\n\nSeja humilde e responda as perguntas com cuidado.\n\nSempre respeite a importante regra abaixo:`);
const textB = (`\n\t\tEscolha número '1' para responder 'SIM' ou;\n\n\t\tEscolha número '2' para responder 'NÃO'\n\n`);
const warning = (`VOCÊ ERROU! Fique mais atenta!Se continuar a errar em suas respostas, talvez perca um braço...`);
const p1 = (`\n — VOCÊ SABER FALAR CANTONÊS? (AVISO: Não responda que fala japonês. Apenas responda '1' para 'SIM' ou '2' para 'NÃO').`);
const p2 = (`\n — AO DEMONSTRAR SUA HABILIDADE COM ESPADAS, VOCÊ ACERTOU PAI MEI PELO MENOS UMA VEZ? (Não conte histórias para boi dormir, simplesmente use '1' para 'SIM' ou '2' para 'NÃO'.)`);
const p3 = (`\n — SUA TÉCNICA DO TIGRE FOI PÁREO PARA GARRA DE ÁGUIA DE PAI MEI? (Não minta. É '1' para 'SIM' ou '2' para 'NÃO'.)`);
const p4 = (`\n — VOCÊ ACHA QUE SUA TÉCNICA DO TIGRE É SUPERIOR A GARRA DE ÁGUIA DE PAI MEI? (Sem forçar a amizade, diga '1' para 'SIM' ou '2' para 'NÃO'.)`);
const p5 = (`\n — PAI MEI IMOBILIZOU SEU BRAÇO, VOCÊ CONSEGUIU IMPEDIR QUE ELE DECEPASSE SEU BRAÇO ADMITINDO QUE SEU KUNG FU É INFERIOR AO DELE? (Sem enrolação, '1' para 'SIM' ou '2' para 'NÃO'.)`);
const final1 = (`\n\tVOCÊ AGIU COMO UMA 'IANQUE' QUE SÓ SABE COMER EM RESTAURANTES E GASTAR O DINHEIRO DO SEU HOMEM”. \n\n\tDEVIDO AO SEU EGO E FALTA DE HUMILDADE, VOCÊ NÃO SERÁ CAPAZ DE COMPREENDER OS ENSINAMENTOS DO GRANDE MESTRE PAI MEI.`);
const final2 = (`\n\tSEU SUPOSTO KUNG FU É PATÉTICO. PAI MEI PEDIU UMA DEMONSTRAÇÃO DO QUE SABE E VOCÊ DEMONSTROU COISA NENHUMA!\n\n\tVOCÊ ADMITIU DERROTA ANTES MESMO DE COMEÇAR.`);
const final3 = (`\n\tVOCÊ ACEITOU QUE É COMO UMA MINHOCA DIANTE DA ÁGUIA.\n\n\tISSO JÁ É UM COMEÇO.\n\n\tPAI MEI DECIDIU TE ACEITAR COMO DISCÍPULA DELE. SEU TREINAMENTO COMEÇA AMANHÃ!`);
const final4 = (`\n\tVOCÊ NÃO TEVE HUMILDADE — A PRINCIPAL QUALIDADE DE UM DISCÍPULO. VOCÊ PENSOU QUE ERA MELHOR QUE PAI MEI E POR ISSO NÃO ESTAVA PRONTO PARA APRENDER A 'FIVE-POINT-HEART-EXPLODING-TECHINIQUE'.\n\n\tNA ENTREVISTA, O GRANDE MESTRE ACABOU COM SUA VIDA PATÉTICA.`);
const final5 = (`\n\tSE VOCÊ ERA TÃO BOA ASSIM, PORQUE PROCUROU PAI MEI PARA APRENDER ALGO NOVO?\n\n\tJÁ QUE VOCÊ DIZ QUE VENCEU O GRANDE MESTRE NO TESTE, ERA VOCÊ QUE DEVERIA ESTAR ENSINANDO ALGO A ELE E NÃO O CONTRÁRIO.`);
const perguntas = [p1,p2,p3,p4,p5];
let respostaSim = [];
let respostaNao = [];
let n = 0


//Background---------------------------------------------------------

console.clear();
console.log (`\n${textA}\n \n\t${textB}`);
prompt(`Pressione ENTER para começar: `);

//Perguntas---------------------------------------------------------

while (n<5) {
    let respostas = (parseInt(prompt(perguntas[n])));

if (respostas == 1) {                                                       // caso as respostas sejam sim
    escolha = ("sim");
    respostaSim.push(respostas);
    n++ 
       
} else if (respostas == 2) {                                                // caso as respostas sejam não 
    escolha = ("não");
    respostaNao.push(respostas);
    n++    

} else if (respostas !=1 || respostas != 2){                                // proteção das respostas para garantir que sejam usados apenas 1 para sim e 2 para não
    console.log (`\n\n\t\t${warning}\n\n${textB}\n`);
} 
   
}

//Exibição do resultado---------------------------------------------------------

prompt(`\n\n\nPressione ENTER para saber o resultado da sua entrevista com Pai Mei: `);
console.clear();

switch (respostaSim.length) {                                               // para ser apresentado um resultado diferente de acordo com a análise das respostas
    case 0:
        console.log(final1)
        break;

        case 1:
        case 2:
        console.log(final2)
        break;

        case 3:
        console.log(final3)
        break;

        case 4:
        console.log(final4)
        break;

        case 5:
        console.log(final5)
        break;
    default:
        break;
}

console.log (`\n\n\n\t\t FIM DA ENTREVISTA COM PAI MEI\n\n`);