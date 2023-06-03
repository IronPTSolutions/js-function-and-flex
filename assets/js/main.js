

function greet(name, language = 'en') {
  let message;
  switch (language) {
    case 'es':
      message = `Hola ${name}!`;
      break;
    case 'en':
      message = `Hi ${name}!`;
      break;
    default:
      throw Error(`Unknown language: ${language}`)
  }
  return message;
}

console.log(greet('Carlos', 'es'));
console.log(greet('Julio', 'en'));
console.log(greet('Cris'));

// 12345 => 54321
// reverse(12345) => 54321

function reverse(number) {
  number = `${number}`;
  let inverted;

  for (let i = number.length - 1; i >= 0; i--) {
    const digit = number[i];
    if (inverted === undefined) {
      inverted = digit;
    } else {
      inverted += digit;
    }
  }

  return parseInt(inverted);
}

console.log(reverse(12345));
console.log(reverse());

function isVowel(char) {
  switch (char.toLowerCase()) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
      return true;
    default:
      return false;
  }
}

console.log('a is vowel?', isVowel('a'));
console.log('z is vowel?', isVowel('z'));

function countVowels(word) {
  let count = 0;
  for (let i = 0; i < word.length; i++) {
    const char = word[i];
    if (isVowel(char)) {
      count++
    }
  }
  return count;
}

console.log('vowels of Hola', countVowels('Hola'))
console.log('vowels of ñU', countVowels('ñU'))

function getRandomElement(elements) {
  const randomIndex = Math.floor(Math.random() * elements.length);
  return elements[randomIndex];
}

const elements = ['Hola', 'Hi']
console.log('random greet', getRandomElement(elements));

function removeElement(elements, element) {
  const elementIndex = elements.indexOf(element);
  if (elementIndex !== -1) {
    elements.splice(elementIndex, 1);
  }
  return elements;
}

const tasks = ['one', 'two'];
console.log(removeElement(tasks, 'one'));
console.log(tasks);