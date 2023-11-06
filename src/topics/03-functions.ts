function addNumbers(a: number, b: number) {
  return a + b;
}

const addNumberArrow = (a: number, b: number): string => `${a + b}`;

function multiply(
  firstNumber: number,
  secondNumber?: number,
  base: number = 2
) {
  return firstNumber * base;
}

// const sum: number = addNumbers(2, 3);
// const sum2: string = addNumberArrow(1, 2);
// const resMulti: number = multiply(5);
// console.log({ sum, sum2, resMulti }); // truco para mostrar el nombre de la variable y su valor

interface Character {
  name: string;
  hp: number;
  showHp: () => void;
}

const healCharacter = (character: Character, amount: number) => {
  character.hp += amount;
};

const strider: Character = {
  name: "Strider",
  hp: 100,
  showHp() {
    console.log(`HP: ${this.hp}`);
  },
};

strider.showHp();

export {};
