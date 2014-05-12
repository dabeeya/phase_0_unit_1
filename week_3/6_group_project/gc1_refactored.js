oddLengthArray  = [1, 2, 3, 4, 5, 5, 7]
evenLengthArray = [4, 4, 5, 5, 6, 6, 6, 7]

//USER STORY
//As a user, I want to find the total sum of a variety of numbers (i.e. test scores). I want sum to add all the individual //test scores and give me the total sum.

// Create variable "sum" that represents sum of numbers within a given range (a,b).
//Refactored sum
var sum = function(range) {
	var total = 0
	for  (var i=0; i<range.length; i++) {
		total += range[i]
	}
		return total;
	
}


//Refactored Tests
sum(oddLengthArray);

//Refactored Tests
sum(evenLengthArray);

//User Story
//As a user, I want to find the average of a set of numbers. So, if I had 3 test scores (100, 25, 61), mean would return the number 62, because 62 is the average score of the three tests.

// set variable mean = sum(range)/(b-a). 
//Refactored same as original 
var mean= function(range) {
	return sum(range)/range.length
}; 

//Refactored Test
mean(oddLengthArray);


//Refactored Test
mean(evenLengthArray);


//User Story
//As a user, I want median to find the middle number of a set of numbers. So if I had numbers 1, 2, 3, 4, and 5, median //would return the number 3. However, if the list comprised of 1, 2, 3, 4, 5, and 6, median would return 3.5 because //median would take the two middle numbers, add them together and divide the sum by 2. Also, median will need to make sure //that the set of numbers are sorted from least to greatest or vice versa.

// Set variable median(range). Sort range and determine median depending on whether range length is even or odd.
//Refactored code
var median= function(range){
	var sortedRange=range.sort();
	var halfLength=Math.floor(range.length/2);
	 if (range.length % 2 === 0) {
			return ((sortedRange[halfLength-1]+sortedRange[halfLength])/2);
		}
	else {
		return sortedRange[halfLength];
	}
}

//Refactored Test
median(oddLengthArray);


//Refactored Test
median(evenLengthArray);




//My Reflection
//The group project was a pretty interesting experience. It allowed a group of people to work on one project, with
//each person having their own responsibilities. Dylan and I had to work together on refactoring and creating
//a user story because of a slight miscommunication error. Our group was successful in passing the test 
//because Dylan and I checked before passing it back to person 1. I realized that refactoring is pretty
//tough at the level I am at because everything seems pretty simple and basic. However, after looking over
//the code constantly, Dylan and I were able to refactor certain codes to make it a bit "prettier".