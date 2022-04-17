/**
 * Мы передаем строку и должны заменить любую z или v вне зависимости от регистра
 * на символ звездочки *
 * @param {string} string
 * @returns {string}
 */

export const replaceZAndVFromString = (string) => {
  let replacedStr = "";

  for (let i = 0; i < string.length; i++) {
    if (string[i].toUpperCase() === 'Z' || string[i].toUpperCase() === 'V') {
      replacedStr += '*';
    }
    else {
      replacedStr += string[i];
    }
  }

  return replacedStr;
};

/**
 * Функция должна принять 3 аргумента и все строки. Мы передаем строку,
 * вторая строка это искомое слово, третья это то слово, на которое мы должны
 * заменить. Смотрите использование в файле check.js рядом. Должно вернуть строку
 * 1 аргумента с замененным словом(2 аргумент) на слово(3 аргумент)
 * @param {string} string
 * @param {string} word
 * @param {string} newWord
 * @returns {string}
 */

export const changeWord = (string, word, newWord) => {
  let wordIndex = string.indexOf(word);
  let wordLength = word.length;

  let changedString = string.slice(0, wordIndex) + newWord + string.slice(wordIndex + wordLength);

  if (wordIndex === -1) {
    return string;
  }

  else {
    return changedString;
  }
};

/**
 * Должна вернуть строку(1 аргумент) на обрезанную по длине(2 аргумент, число)
 * @param {string} string
 * @param {number} length
 * @returns {string}
 */

export const truncate = (string, length) => {
  return string.substring(0, length);
};

/**
 * Принимает строку в первом аргументе, и символ во втором
 * И должно вернуть количество этих символов в этой строке
 * Попробуйте реализовать просто через цикл for и с проверкой
 * посимвольно. Кстати, проверка регистронезависимая. Если у нас
 * строка 'I am ivan' и хочу найти количество символов i то будет
 * их 2, и если I то тоже 2
 * @param {string} string
 * @param {string} symbol
 * @returns {number}
 */

export const quantityOfSymbols = (string, symbol) => {
  let characters = 0;

  for (let i = 0; i < string.length; i++) {
    if (string[i].toUpperCase() === symbol.toUpperCase()) {
      characters++;
    }
  }

  return characters;
};

/**
 * Принимает строку в первом аргументе, и символ во втором
 * И должно вернуть количество этих символов в этой строке
 * Попробуйте реализовать через метод indexOf. Напомню, в
 * нем есть второй аргумент, который говорит, от какой позиции
 * делать поиск. Я хочу, чтобы вы сделали бесконечный цикл
 * while и искали символы этим методом, и сделали break когда позиций
 * больше нет. Так будет более оптимально, меньше проходов цикла.
 * Кстати, проверка регистронезависимая. Если у нас
 * строка 'I am ivan' и хочу найти количество символов i то будет
 * их 2, и если I то тоже 2
 * @param {string} string
 * @param {string} symbol
 * @returns {number}
 */

export const quantityOfSymbolsWithIndexOf = (string, symbol) => {
  let characters = 0;
  let pos = 0;
  let modString = string.toUpperCase();
  let modSymbol = symbol.toUpperCase();

  do {
    if (modString.indexOf(modSymbol, pos) !== -1) {
      pos = modString.indexOf(modSymbol, pos) + 1;
      characters++;
    }
    else {
      break;
    }
  } while (true)

  return characters;
};
