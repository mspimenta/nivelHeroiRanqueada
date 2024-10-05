/*
Instruções para entrega
 # 2️⃣ Calculadora de partidas Rankeadas
**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções

## Objetivo:

Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

Se vitórias for menor do que 10 = Ferro
Se vitórias for entre 11 e 20 = Bronze
Se vitórias for entre 21 e 50 = Prata
Se vitórias for entre 51 e 80 = Ouro
Se vitórias for entre 81 e 90 = Diamante
Se vitórias for entre 91 e 100= Lendário
Se vitórias for maior ou igual a 101 = Imortal

## Saída

Ao final deve se exibir uma mensagem:
"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"

*/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function nivelRank(vitorias) {
    if (vitorias <= 10) {
        return 'Ferro';
    } else if (vitorias >= 11 && vitorias <= 20) {
        return 'Bronze';
    } else if (vitorias >= 21 && vitorias <= 50) {
        return 'Prata';
    } else if (vitorias >= 51 && vitorias <= 80) {
        return 'Ouro';
    } else if (vitorias >= 81 && vitorias <= 90) {
        return 'Diamante';
    } else if (vitorias >= 91 && vitorias <= 100) {
        return 'Lendário';
    } else if (vitorias >= 101) {
        return 'Imortal';
    }
}

rl.question('Qual é a quantidade de vitórias em partidas ranqueadas? ', (vitorias) => {
    // Verificando se a entrada é um número válido
    if (isNaN(vitorias)) {
        console.log('Valor incorreto, verifique o número de vitórias e tente novamente.');
        rl.close();
        return;
    }

    rl.question('Qual é a quantidade de derrotas? ', (derrotas) => {
        // Verificando se a entrada é um número válido
        if (isNaN(derrotas)) {
            console.log('Valor incorreto, verifique o número de derrotas e tente novamente.');
            rl.close();
            return;
        }

        const saldoVitorias = parseInt(vitorias) - parseInt(derrotas);
        const calcularNivel = nivelRank(parseInt(vitorias)); // Aqui usamos o total de vitórias

        console.log(`O Herói tem saldo de ${saldoVitorias} vitórias e está no nível ${calcularNivel}`);

        rl.close();
    });
});