/**
 * DESAFIO:
 * Nesse teste, quero que o retorno seja AS LETRAS INVERTIDAS,
 * mas caracteres especiais, espaços ou qualquer outra coisa
 * diferente de letra permaneça na mesma posição,
 * seguindo o exemplo o resultado esperado seria: j<*zz
 * 
 * PASSO A PASSO:
 * - Inverter somente letras
 *    - input: z<*zj
 *    - output: j<*zz
 */

function reverseLetters(sentence) {
  const letters = sentence.match(/[a-z]+/gi).join('');
  const lettersReversed = letters.split('').reverse().join('');

  let index = 0;

  return sentence.split('').reduce((result, char) => {
    const isCharLetter = /[a-z]/i.test(char);

    if (isCharLetter) {
      result += lettersReversed[index];
      index += 1;
    } else {
      result += char
    }

    return result;
  }, '');
}

console.log(reverseLetters("z<*zj"));
