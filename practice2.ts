const sumOf = (num1: number, num2: number): number => {
  const sum = num1 + num2;
  return sum;
};

sumOf(1, 2);

//////

const lengthOfString = (string: string): number => {
  const stringLength = string.length;
  return stringLength;
};

//////

const arraySum = (array: number[]): number => {
  let sum = 0;
  array.forEach((number) => {
    sum += number;
  });
  return sum;
};

//////

interface Person {
  name: string;
  age: number;
  email: string;
}

const personInfo = (person: Person): string => {
  const info = `Name: ${person.name}, Age: ${person.age}, Email: ${person.email}`;
  return info;
};

//////

interface Shape {
  name: string;
}

interface Circle extends Shape {
  hasRightAngles: boolean;
}

interface Rectangle extends Shape {
  hasRightAngles: boolean;
}

const shapeInfo = (shape: Circle | Rectangle): string => {
  let shapeName = shape.name;
  let hasRightAngles = shape.hasRightAngles;
  if ((hasRightAngles = true)) {
    return `This is a ${shapeName} and it has right angles`;
  } else {
    return `This is a ${shapeName} and it does not have right angles`;
  }
};

//////

const isPrime = (num: number): boolean => {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

//////

interface Animal {
  name: string;
  age: number;
}

const animals: Animal[] = [
  { name: "Lion", age: 5 },
  { name: "Elephant", age: "10" },
  { name: "Giraffe", age: 7 },
  { name: "Tiger", age: "3" },
];

const totalAge = (animals: Animal[]): number => {
  let totalAge = 0;
  animals.forEach((animal) => {
    totalAge += animal.age;
  });
  return totalAge;
};

//////

const reverseWords = (input: string): string => {
  const words = input.split(" ");
  const reversedWords = words.reverse();
  return reversedWords.join(" ");
};

///
