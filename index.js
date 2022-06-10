const prompt = require('prompt-sync')();
console.clear();
// Faça um "jogo da velha" criando uma matriz em duas dimensões (Você deve criar um array com 3 arrays de 3 elementos cada dentro). O programa deve pedir as coordenadas (linha e coluna) alternadamente para 2 jogares e marcar X ou O em cada caso. Caso um jogador vença, ele deve perguntar se desejam jogar mais uma vez, e registrar quem venceu aquela rodada, se os jogadores desejarem parar, o programa deve mostrar quem ganhou mais rodadas e quem é o grande vencedor.
console.log('Bem vindo(a) ao Jogo da Velha');
console.log();
let tabuleiro = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
// 1 = [0][0]  // 2 = [0][1]  // 3 = [0][2]
// 4 = [1][0]  // 5 = [1][1]  // 6 = [1][2]
// 7 = [2][0]  // 8 = [2][1]  // 9 = [2][2]

// Para ganhar tem que ter preenchido com X || O:
// 1 | 2 | 3   \\ 2 | 5 | 8   \\ 3 | 6 | 9
// 1 | 4 | 7
// 1 | 5 | 9
const nomes = () => {
    let player1 = prompt('Qual o nome do jogador 1: ');
    console.log();
    let player2 = prompt('Qual o nome do jogador 2: ');
    console.log();
    console.log(`O jogador ${player1} joga com X`);
    console.log();
    console.log(`O jogador ${player2} joga com O`);
    let players = [player1, player2];
    return players;
};

const jogadas = (nomes, tabuleiro) => {
    let escolhas = [];
    console.log(`Vamos começar a jogar. Estão preparados ${nomes} ?`);
    prompt();
    console.table(tabuleiro);
    jogo: while (true) {
        let jogadaPlayer1 = +prompt(`${nomes[0]} onde deseja jogar? `);
        while (
            escolhas.indexOf(jogadaPlayer1) != -1 ||
            (jogadaPlayer1 != 1 &&
                jogadaPlayer1 != 2 &&
                jogadaPlayer1 != 3 &&
                jogadaPlayer1 != 4 &&
                jogadaPlayer1 != 5 &&
                jogadaPlayer1 != 6 &&
                jogadaPlayer1 != 7 &&
                jogadaPlayer1 != 8 &&
                jogadaPlayer1 != 9)
        ) {
            console.log('Essa posição já foi prenchida...');
            jogadaPlayer1 = +prompt(`${nomes[0]} onde deseja jogar? `);
        }
        escolhas.push(jogadaPlayer1);
        if (jogadaPlayer1 == 1) {
            tabuleiro[0][0] = 'X';
            console.table(tabuleiro);
        } else if (jogadaPlayer1 == 2) {
            tabuleiro[0][1] = 'X';
            console.table(tabuleiro);
        } else if (jogadaPlayer1 == 3) {
            tabuleiro[0][2] = 'X';
            console.table(tabuleiro);
        } else if (jogadaPlayer1 == 4) {
            tabuleiro[1][0] = 'X';
            console.table(tabuleiro);
        } else if (jogadaPlayer1 == 5) {
            tabuleiro[1][1] = 'X';
            console.table(tabuleiro);
        } else if (jogadaPlayer1 == 6) {
            tabuleiro[1][2] = 'X';
            console.table(tabuleiro);
        } else if (jogadaPlayer1 == 7) {
            tabuleiro[2][0] = 'X';
            console.table(tabuleiro);
        } else if (jogadaPlayer1 == 8) {
            tabuleiro[2][1] = 'X';
            console.table(tabuleiro);
        } else if (jogadaPlayer1 == 9) {
            tabuleiro[2][2] = 'X';
            console.table(tabuleiro);
        }
        if (escolhas.length == 9) {
            break jogo;
        }
        let jogadaPlayer2 = +prompt(`${nomes[1]} onde deseja jogar? `);
        while (
            escolhas.indexOf(jogadaPlayer2) != -1 ||
            (jogadaPlayer2 != 1 &&
                jogadaPlayer2 != 2 &&
                jogadaPlayer2 != 3 &&
                jogadaPlayer2 != 4 &&
                jogadaPlayer2 != 5 &&
                jogadaPlayer2 != 6 &&
                jogadaPlayer2 != 7 &&
                jogadaPlayer2 != 8 &&
                jogadaPlayer2 != 9)
        ) {
            console.log('Essa posição já foi prenchida...');
            jogadaPlayer2 = +prompt(`${nomes[1]} onde deseja jogar? `);
        }
        escolhas.push(jogadaPlayer2);
        if (jogadaPlayer2 == 1) {
            tabuleiro[0][0] = 'O';
            console.table(tabuleiro);
        } else if (jogadaPlayer2 == 2) {
            tabuleiro[0][1] = 'O';
            console.table(tabuleiro);
        } else if (jogadaPlayer2 == 3) {
            tabuleiro[0][2] = 'O';
            console.table(tabuleiro);
        } else if (jogadaPlayer2 == 4) {
            tabuleiro[1][0] = 'O';
            console.table(tabuleiro);
        } else if (jogadaPlayer2 == 5) {
            tabuleiro[1][1] = 'O';
            console.table(tabuleiro);
        } else if (jogadaPlayer2 == 6) {
            tabuleiro[1][2] = 'O';
            console.table(tabuleiro);
        } else if (jogadaPlayer2 == 7) {
            tabuleiro[2][0] = 'O';
            console.table(tabuleiro);
        } else if (jogadaPlayer2 == 8) {
            tabuleiro[2][1] = 'O';
            console.table(tabuleiro);
        } else if (jogadaPlayer2 == 9) {
            tabuleiro[2][2] = 'O';
            console.table(tabuleiro);
        }
    }
};
jogadas(nomes(), tabuleiro);
console.table(tabuleiro);
const ganhador = tabuleiro => {};
