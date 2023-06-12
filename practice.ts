// implicit type defintion
const number = 1;
const teacher = "joe";

const newNumber: number = 1;
const student: string = "cameron";
const hot: boolean = true;

type Employee = {
  id: number;
  name: string;
  height: string;
  seasonal?: boolean;
};

interface Manager extends Employee {
  securityClearance: string;
}

const Dustin: Employee = {
  id: 2,
  name: "Dustin",
  height: "5-11",
};

const Justin: Manager = {
  id: 3,
  name: "Justin",
  height: "5-11",
  securityClearance: "Sec 1",
  seasonal: true,
};

const employees: Employee[] = [];

employees.push(Justin, Dustin);

employees.forEach((thing) => {
  console.log(thing.name);
});

// ES6 FUNCTIONS, ARROW FUNCTION
const Kim = (personsName: string): string => {
  const greeting = "Hello " + personsName;
  return greeting;
};

Kim("Max");
