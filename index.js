const prompt = require('prompt-sync')();
console.clear();
console.log('Bem vindos ao Jogo da Velha');
console.log();
let tabuleiro = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
// 1 = [0][0]  // 2 = [0][1]  // 3 = [0][2]
// 4 = [1][0]  // 5 = [1][1]  // 6 = [1][2]
// 7 = [2][0]  // 8 = [2][1]  // 9 = [2][2]

const nomes = () => {
    let player1 = prompt('Qual o nome do jogador(a) 1: ');
    console.log();
    let player2 = prompt('Qual o nome do jogador(a) 2: ');
    console.log();
    console.log(`O jogador(a) ${player1} joga com X`);
    console.log();
    console.log(`O jogador(a) ${player2} joga com O`);
    let players = [player1, player2];
    return players;
};
const marcacaoTabuleiro = (jogadaPlayer, player, tabuleiro) => {
    if (player == 1) {
        if (jogadaPlayer == 1) {
            tabuleiro[0].splice(0, 1, 'X');
            // tabuleiro[0][0] = 'X';
            console.table(tabuleiro);
        } else if (jogadaPlayer == 2) {
            tabuleiro[0][1] = 'X';
            console.table(tabuleiro);
        } else if (jogadaPlayer == 3) {
            tabuleiro[0][2] = 'X';
            console.table(tabuleiro);
        } else if (jogadaPlayer == 4) {
            tabuleiro[1][0] = 'X';
            console.table(tabuleiro);
        } else if (jogadaPlayer == 5) {
            tabuleiro[1][1] = 'X';
            console.table(tabuleiro);
        } else if (jogadaPlayer == 6) {
            tabuleiro[1][2] = 'X';
            console.table(tabuleiro);
        } else if (jogadaPlayer == 7) {
            tabuleiro[2][0] = 'X';
            console.table(tabuleiro);
        } else if (jogadaPlayer == 8) {
            tabuleiro[2][1] = 'X';
            console.table(tabuleiro);
        } else if (jogadaPlayer == 9) {
            tabuleiro[2][2] = 'X';
            console.table(tabuleiro);
        }
    } else if (player == 2) {
        if (jogadaPlayer == 1) {
            tabuleiro[0][0] = 'O';
            console.table(tabuleiro);
        } else if (jogadaPlayer == 2) {
            tabuleiro[0][1] = 'O';
            console.table(tabuleiro);
        } else if (jogadaPlayer == 3) {
            tabuleiro[0][2] = 'O';
            console.table(tabuleiro);
        } else if (jogadaPlayer == 4) {
            tabuleiro[1][0] = 'O';
            console.table(tabuleiro);
        } else if (jogadaPlayer == 5) {
            tabuleiro[1][1] = 'O';
            console.table(tabuleiro);
        } else if (jogadaPlayer == 6) {
            tabuleiro[1][2] = 'O';
            console.table(tabuleiro);
        } else if (jogadaPlayer == 7) {
            tabuleiro[2][0] = 'O';
            console.table(tabuleiro);
        } else if (jogadaPlayer == 8) {
            tabuleiro[2][1] = 'O';
            console.table(tabuleiro);
        } else if (jogadaPlayer == 9) {
            tabuleiro[2][2] = 'O';
            console.table(tabuleiro);
        }
    }
    return tabuleiro;
};
const ganhador = (tabuleiro, player) => {
    if (player == 1) {
        if (
            // 1 | 2 | 3
            tabuleiro[0][0] == 'X' &&
            tabuleiro[0][1] == 'X' &&
            tabuleiro[0][2] == 'X'
        ) {
            return true;
        } else if (
            // 4 | 5 | 6
            tabuleiro[1][0] == 'X' &&
            tabuleiro[1][1] == 'X' &&
            tabuleiro[1][2] == 'X'
        ) {
            return true;
        } else if (
            // 7 | 8 | 9
            tabuleiro[2][0] == 'X' &&
            tabuleiro[2][1] == 'X' &&
            tabuleiro[2][2] == 'X'
        ) {
            return true;
        } else if (
            // 1 | 4 | 7
            tabuleiro[0][0] == 'X' &&
            tabuleiro[1][0] == 'X' &&
            tabuleiro[2][0] == 'X'
        ) {
            return true;
        } else if (
            // 2 | 5 | 8
            tabuleiro[0][1] == 'X' &&
            tabuleiro[1][1] == 'X' &&
            tabuleiro[2][1] == 'X'
        ) {
            return true;
        } else if (
            // 3 | 6 | 9
            tabuleiro[0][2] == 'X' &&
            tabuleiro[1][2] == 'X' &&
            tabuleiro[2][2] == 'X'
        ) {
            return true;
        } else if (
            // 1 | 5 | 9
            tabuleiro[0][0] == 'X' &&
            tabuleiro[1][1] == 'X' &&
            tabuleiro[2][2] == 'X'
        ) {
            return true;
        } else if (
            // 3 | 5 | 7
            tabuleiro[0][2] == 'X' &&
            tabuleiro[1][1] == 'X' &&
            tabuleiro[2][0] == 'X'
        ) {
            return true;
        } else {
            return false;
        }
    } else if (player == 2) {
        if (
            // 1 | 2 | 3
            tabuleiro[0][0] == 'O' &&
            tabuleiro[0][1] == 'O' &&
            tabuleiro[0][2] == 'O'
        ) {
            return true;
        } else if (
            // 4 | 5 | 6
            tabuleiro[1][0] == 'O' &&
            tabuleiro[1][1] == 'O' &&
            tabuleiro[1][2] == 'O'
        ) {
            return true;
        } else if (
            // 7 | 8 | 9
            tabuleiro[2][0] == 'O' &&
            tabuleiro[2][1] == 'O' &&
            tabuleiro[2][2] == 'O'
        ) {
            return true;
        } else if (
            // 1 | 4 | 7
            tabuleiro[0][0] == 'O' &&
            tabuleiro[1][0] == 'O' &&
            tabuleiro[2][0] == 'O'
        ) {
            return true;
        } else if (
            // 2 | 5 | 8
            tabuleiro[0][1] == 'O' &&
            tabuleiro[1][1] == 'O' &&
            tabuleiro[2][1] == 'O'
        ) {
            return true;
        } else if (
            // 3 | 6 | 9
            tabuleiro[0][2] == 'O' &&
            tabuleiro[1][2] == 'O' &&
            tabuleiro[2][2] == 'O'
        ) {
            return true;
        } else if (
            // 1 | 5 | 9
            tabuleiro[0][0] == 'O' &&
            tabuleiro[1][1] == 'O' &&
            tabuleiro[2][2] == 'O'
        ) {
            return true;
        } else if (
            // 3 | 5 | 7
            tabuleiro[0][2] == 'O' &&
            tabuleiro[1][1] == 'O' &&
            tabuleiro[2][0] == 'O'
        ) {
            return true;
        } else {
            return false;
        }
    }
};
const jogo = (nomes, tabuleiro, marcacaoTabuleiro, ganhador) => {
    let escolhas = [];
    let placar_player1 = 0;
    let placar_player2 = 0;
    let ganhar = false;
    console.log(`Vamos começar a jogar. Estão preparados ${nomes} ?`);
    prompt();
    jogo: while (true) {
        console.clear();
        console.table(tabuleiro);
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
            if (escolhas.indexOf(jogadaPlayer1) != -1) {
                console.log('Essa posição já foi prenchida...');
            } else {
                console.log('Essa posição é invalida');
            }
            jogadaPlayer1 = +prompt(`${nomes[0]} onde deseja jogar? `);
        }

        escolhas.push(jogadaPlayer1);

        marcacaoTabuleiro(jogadaPlayer1, 1, tabuleiro);

        ganhar = ganhador(tabuleiro, 1);

        if (ganhar) {
            placar_player1++;
            break jogo;
        } else if (escolhas.length == 9) {
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
            if (escolhas.indexOf(jogadaPlayer2) != -1) {
                console.log('Essa posição já foi prenchida...');
            } else {
                console.log('Essa posição é invalida');
            }
            jogadaPlayer2 = +prompt(`${nomes[1]} onde deseja jogar? `);
        }

        escolhas.push(jogadaPlayer2);

        marcacaoTabuleiro(jogadaPlayer2, 2, tabuleiro);
        ganhar = ganhador(tabuleiro, 2);

        if (ganhar) {
            placar_player2++;
            break jogo;
        } else if (escolhas.length == 9) {
            break jogo;
        }
    }
    if (placar_player1 > placar_player2) {
        console.log(`O jogador ${nomes[0]} foi o grande campeão`);
    } else if (placar_player2 > placar_player1) {
        console.log(`O jogador ${nomes[1]} foi o grande campeão`);
    } else {
        console.log(`Deu velha`);
    }
};
jogo(nomes(), tabuleiro, marcacaoTabuleiro, ganhador);
