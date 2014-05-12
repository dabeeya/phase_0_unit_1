// This is a Solo Challenge. 

// There is a section below where you will write your code.
// Do not alter this object here.


var terah = {
  name: "Terah",
  age: 32,
  height: 66,
  weight: 130,
  hairColor: "brown",
  eyeColor: "brown"
}
/* Pseudocode Section - write pseudocode for each challenge below.
1. Define a variable adam and use object literal notation to assign this variable 
   the value of a JavaScript Object object with no properties.
//create object literal adam
2. Give adam a name property with the value "Adam".
//add property of string "Adam" to object adam
3. Add a spouse property to terah and assign it the value of adam.
//make adam spouse of terah
4. Change the value of the terah weight property to 125.
//change property weight to 125
5. Remove the eyeColor property from terah.
//remove property eyeColor from terah
6. Add a spouse property to adam and assign it the value of terah.
//make terah spouse of adam
7. Add a children property to terah and and use object literal notation to assign 
   this variable the value of a JavaScript Object object with no properties
//add children object and nest it to terah
8. Add a carson property to the value of the terah children property and assign it 
  the value of an object with the property name with a value of "Carson".
//add carson object with the property value of "Carson"
9. Add a carter property to the value of the terah children property and assign it 
   the value of an object with the property name with a value of "Carter".
//add carter object and create property value of "Carter"
10. Add a colton property to the value of the terah children property and assign it 
    the value of an object with the property name with a value of "Colton".
//add colton object with the property value of "Colton"
11. Add a children property to adam and assign it the value of terah children.
//nest children to adam as well

*/

// __________________________________________
// Write your code below.
var adam = { name: 'Adam'};
terah.spouse = adam;
terah.weight = 125;
delete terah.eyeColor;
adam.spouse = terah;
terah.children = {};
terah.children.carson = {name: 'Carson'};
terah.children.carter = {name: 'Carter'};
terah.children.colton = {name: 'Colton'};
adam.children = terah.children;






// __________________________________________
// Reflection: Use the reflection guidelines
// - My strategy to comeplete this challegene was to take it step by step. So, as I finished one section, I
// run my code through the terminal to make sure that it passed the test. The strategy was working fine
// until I hit a speedbump. I had a problem trying to pass the test for the children. I wasn't sure how to
// go about this issue. At first, I tried to follow the guide from the intro to JavaScript we were supposed
// to read. I tried adding an . But it did not seem to work. So after a lot of trial and error, almost inputing 
// anything I could think of, I was able to come up with a piece of code that passed the tests.
// - I was able to answer most of the questions I had from rereeading the guide we were instructed to read.
// - I was having some trouble trying to add a nonexistent propery to an object. 
// - I think I was able to have a better understanding of adding a new property. But I am still uncertain
// it is the most effiecient way.
// - I enjoyed the parts when I saw true for each test!
// - The most tedious thing for this project would have to be using a guess and check method. As I said 
// before I was facing issues trying to add the children in. It took a me a lot of rereading and guessing
// to find code that would pass the test.



// __________________________________________
// Driver Code:  Do not alter code below this line.
function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}

assert(
  (adam instanceof Object),
  "The value of adam should be an Object.",
  "1. "
)

assert(
  (adam.name === "Adam"),
  "The value of the adam name property should be 'Adam'.",
  "2. "
)

assert(
  terah.spouse === adam,
  "terah should have a spouse property with the value of the variable adam.",
  "3. "
)

assert(
  terah.weight === 125,
  "The terah weight property should be 125.",
  "4. "
)

assert(
  terah.eyeColor === undefined,
  "The terah eyeColor property should be removed.",
  "5. "
)

assert(
  terah.spouse.spouse === terah,
  "The terah spouse property's value spouse property should be terah.",
  "6. "
)

assert(
  (terah.children instanceof Object),
  "The value of the terah children property should be an Object.",
  "7. "
)

assert(
  terah.children.carson.name === "Carson",
  "The terah children property should have a carson property with its own property name with a value of 'Carson'.",
  "8. "
)

assert(
  terah.children.carter.name === "Carter",
  "The terah children property should have a carter property with its own property name with a value of 'Carter'.",
  "9. "
)

assert(
  terah.children.colton.name === "Colton",
  "The terah children property should have a colton property with its own property name with a value of 'Colton'.",
  "10. "
)

assert(
  adam.children === terah.children,
  "The value of the adam children property should be the value of the terah children property",
  "11. "
)

console.log("\nHere is your final terah object:")
console.log(terah)