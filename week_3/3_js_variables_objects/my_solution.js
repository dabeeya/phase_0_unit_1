// I paired [by myself, with:] on this challenge.




// Pseudocode
// Set secretNumber as number
// Set password as string
// Set boolean
// Set array


// __________________________________________
// Write your code below.
var secretNumber = 7;
var password = "just open the door";
var allowedIn = false;
var members = ["John", 3, "David", "Mary"];



// __________________________________________
// Refactored Code: Include a refactored version (or justification of your original code) here. 
// - I was able to pass a couple tests at a time with the original code. For example, we were able to set 
// secretNumber as a number and equal to 7. Same with the other variables.



// __________________________________________
// Reflection: Use the reflection guidelines to write a reflection here. 
// 1) I think the biggest problem I had with this excercise was getting started. I felt really lost because I
// had no sense of strategy. But after a tutoring session, and a little bit of guidance, I was able to complete
// the excercise.
// 2) Some questions I had were about arrays in Javascript. Thankfully, I was able to get the simple questions
// answered quickly because of my tutor session.
// 3) I think a concept I'm having trouble with is just reading the code overall, and seeing what needs to be done
// 4) I learned how to run a file in node! And it felt awesome! The guide I read was kind of confusing for me,
// but when I was explained how to do it, it felt extremely simple.
// 5) I am about 70% confident with the section. There are a lot of things in Javascript that still confuses me
// a bit (ie object literals).
// 6) I enjoyed actually completeing this excercise (after some guidance). The guiadnce helped get me started,
// and actually finishing the challenege was pretty simple!
// 7) There wasn't anything that I found too tedious in the challenge. I guess that most tedious part was just
// to make sure each test passed.


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
  (typeof secretNumber === 'number'),
  "The value of secretNumber should be a number.",
  "1. "
)

assert(
  secretNumber === 7,
  "The value of secretNumber should be 7.",
  "2. "
)

assert(
  typeof password === 'string',
  "The value of password should be a string.",
  "3. "
)

assert(
  password === "just open the door",
  "The value of password should be 'just open the door'.",
  "4. "
)

assert(
  typeof allowedIn === 'boolean',
  "The value of allowedIn should be a boolean.",
  "5. "
)

assert(
  allowedIn === false,
  "The value of allowedIn should be false.",
  "6. "
)

assert(
  members instanceof Array,
  "The value of members should be an array",
  "7. "
)

assert(
  members[0] === "John",
  "The first element in the value of members should be 'John'.",
  "8. "
)

assert(
  members[3] === "Mary",
  "The fourth element in the value of members should be 'Mary'.",
  "9. "
)

