const skills: string[] = ["bash", "counter", "healing"];

interface Character {
  name: string;
  hp: number;
  skills: string[];
  hometown?: string;
}

const strider: Character = {
  name: "Merlin",
  hp: 100,
  skills: ["bash", "counter"],
};

strider.hometown = "Gondor";

console.table(strider);

export {};
