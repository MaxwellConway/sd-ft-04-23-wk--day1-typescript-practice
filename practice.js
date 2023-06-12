"use strict";
// implicit type defintion
const number = 1;
const teacher = "joe";
const newNumber = 1;
const student = "cameron";
const hot = true;
const Dustin = {
    id: 2,
    name: "Dustin",
    height: "5-11",
};
const Justin = {
    id: 3,
    name: "Justin",
    height: "5-11",
    securityClearance: "Sec 1",
    seasonal: true,
};
const employees = [];
employees.push(Justin, Dustin);
employees.forEach((thing) => {
    console.log(thing.name);
});
// ES6 FUNCTIONS, ARROW FUNCTION
const Kim = (personsName) => {
    const greeting = "Hello " + personsName;
    return greeting;
};
Kim("Max");
