// //Setting and Swapping
// Set myNumber to 42. Set myName to your name.
// Now swap myNumber into myName & vice versa.
"use strict";

function setandswap() {
    var myNumber = 42;
    var myName = "Josh";
    myNumber = myName;
    myName = myNumber;
    console.log(myName);
    console.log(myNumber);
}
setandswap();
//  Print -52 to 1066
// Print integers from -52 to 1066 using a FOR loop.
for (var i = -52; i <= 1066; i++) {
    console.log(i);
}

//  Don’t Worry, Be Happy
// Create beCheerful(). Within it, console.log
// string "good morning!" Call it 98 times.
function beCheerful() {
    for (var i = 0; i <= 98; i++) {
        console.log("good morning!");
    }
}
beCheerful();



 Incomplete  
//Multiples of Three – but Not All
// Using FOR, print multiples of 3 from -300 to 0.
// Skip -3 and -6.
function multipleOfThree() {
    var print = 0;
    for (var i = -300; i <= 0; i++) {
        if (i % 3 === 0) {
            if (i === -3 || -6) {
                continue;
            } else {
                i = print;
                console.log(print);
            }
        }
    }
}
multipleOfThree();

// Printing Integers with While
// Print integers from 2000 to 5280, using a WHILE.
var num = 2000;
while (num <= 5280) {
    num++;
    console.log(num);
}


Incomplete
//  You Say It’s Your Birthday
// If 2 given numbers represent your birth month
// and day in either order, log "How did you
// know?", else log "Just another day...."
function bdayGuess() {
    var guess1 = 0,
        guess2 = 0;
    for (var i = 0; i <= 31; i++) {
        i = guess1;
        for (var x = 0; x <= 31; i++) {
            guess2 = x;
            if (guess1 == 6 && guess2 !== 6 || guess2 == 30 && guess2 !== 6) {
                console.log("How Did You Know?");
                console.log("the day & month is" + i + "/" + x);
            } else {
                continue;
            }
        }
    }
}
bdayGuess();


//  Leap Year
// Write a function that determines whether a given
// year is a leap year. If a year is divisible by four,
// it is a leap year, unless it is divisible by 100.
// However, if it is divisible by 400, then it is.

function leapyear(n){
	var isLeapYear = false;
	 if(n % 4 === 0){
	 	isLeapYear = true;
	 	if (n % 100 === 0 && n % 400 !== 0){
			isLeapYear = false;
		}

	 }
	return isLeapYear;
}
leapyear(4000);

//  Print and Count
// Print all integer multiples of 5, from 512 to 4096.
// Afterward, also log how many there were.

function printAndCount(){
var count = 0;

	for (var i = 512; i <= 4096 ; i++) {
		if (i % 5 === 0){
			console.log(i);
			count++;
		}
	}
	console.log("the count is" + count);
}

 printAndCount();



//  Multiples of Six
// Print multiples of 6 up to 60,000, using a WHILE.
 function divBySix(){
 var multOfSix = 0;

 while(multOfSix <= 60000){
 	if (multOfSix % 6 === 0){
 		console.log(multOfSix);
 		multOfSix++;
 		}
	}
 }

 divBySix()


//  Counting, the Dojo Way
// Print integers 1 to 100. If divisible by 5, print
// "Coding" instead. If by 10, also print " Dojo".

function dojoCount () {
	for (var i = 0; i <= 100 ; i++) {
	
		if (i % 5 === 0 && i % 10 !== 0){
			console.log("Coding");
		}else if (i % 10 === 0){
			console.log("Dojo");
		}
		else{
			console.log(i);
		}
	}
}
dojoCount();

//  What Do You Know?
// Your function will be given an input parameter
// incoming. Please console.log this value.


function input(z){
	console.log(z);
}


//  Whoa, That Sucker’s Huge…
// Add odd integers from -300,000 to 300,000, and
// console.log the final sum. Is there a shortcut?

function hugeSucker(){
	var sum =0;
for (var i = 1; i <= 300000 ; i= i+2) {
	sum += i;
	}
	console.log(sum);
}

//  Countdown by Fours
// Log positive numbers starting at 2016, counting
// down by fours (exclude 0), without a FOR loop.

function countByFour(){
	var num = 2016;
	while(num > 0){
		if (num % 2 === 0 ) {
			console.log(num);
			num = num - 4;
		}

	}
	
}
countByFour()



//  Flexible Countdown
// Based on earlier “Countdown by Fours”, given lowNum, highNum, mult, 
//print multiples of mult from highNum down to lowNum, using a FOR.
// For (2,9,3), print 9 6 3 (on successive lines).

function flexibleCount(){

console.log("I didnt understand this question");
	
}


//  The Final Countdown
// This is based on “Flexible Countdown”
// The parameter names are not as helpful, but the problem is
// essentially identical; don’t be thrown off! 
//Given 4 parameters (param1,param2,param3,param4),
// print the multiples of param1, starting at param2 and extending to param3.
// One exception: if a multiple is equal to param4, then skip (don’t print) it. Do this using a WHILE. Given (3,5,17,9), print
// 6,12,15 (which are all of the multiples of 3 between 5 and 17, and excluding the value 9)

function finalCountdown(){
	console.log("I didnt understand this question");
}


//  Countdown
// Create a function that accepts a number as an input. Return a new array that counts down by one, from
// the number (as array’s ‘zeroth’ element) down to 0 (as the last element). How long is this array?

function countdown(z){

var newArr = [];
	while (z >= 0){
		newArr.push(z);
		console.log(z);
		z--;
	}
return newArr;
return newArr.length;
}


//  Print and Return
// Your function will receive an array with two numbers. Print the first value, and return the second.
function printReturn(n){
	console.log(n[0]);
	return n[1];
}


//  First Plus Length
// Given an array, return the sum of the first value in the array, plus the array’s length. What happens if
// the array’s first value is not a number, but a string (like "what?") or a boolean (like false).

function firstPlusLength(n){
	if(isNaN(n)){
		console.log("Sorry Bruh That ain't No Number...")
	} else{
			return n[1] + n.length;
	}
}

//  Values Greater than Second
// For [1,3,5,7,9,13], print values that are greater than its 2nd value. Return how many values this is.

function greaterValue(x){
	var value = x[1];
	var quantity = 0;

 	for (var i = 0; i <= x.length; i++) {

 		if (x[i] > value){
 			console.log (x[i]);
 			quantity = quantity  + 1;
 		}
 	}
 	return quantity;
}


//  Values Greater than Second, Generalized
// Write a function that accepts any array, and returns a new array with the array values that are greater
// than its 2nd value. Print how many values this is. What will you do if the array is only one element long?
function greaterValueGen(x){
	var value = x[1];
	var quantity = 0;
	var arr = [];

	if (x.length === 0){
 			console.log("Excuse Me Fine Sir, There Is No 2nd Element in Your Stupid Array...");
 		}

 	for (var i = 0; i <= x.length; i++) {
	 		if (x[i] > value){
 			quantity = quantity  + 1;
 			arr.push(x[i]);
 		}		
 	}
 	console.log(arr);
 	return quantity + " is how many values are greater than the 2nd value";
 	}


//  This Length, That Value
// Given two numbers, return array of length num1 with each value num2. Print "Jinx!" if they are same.

function lengthAndValue(x){
	var num1 = x[0], num2 = x[1], count = 0, anotherArr = [];

	if (num1 == num2) {
		console.log("jinx!");
	} else{
	for (var i = 0; i < num1; i++) {
		count++;
	}
	for (var i = count; i > 0; i--) {
		anotherArr.push(num2);
		}
	}
	return anotherArr;
}

//  Fit the First Value
// Your function should accept an array. If value at [0] is greater than array’s length, print "Too big!";
// if value at [0] is less than array’s length, print "Too small!"; otherwise print "Just right!".

function fitTheFirst(x){
	if (x[0] < x.length){
		console.log ("Too Big!");
	}else if (x[0] > x.length){
		console.log ("Too small");
	}else {
		console.log("Just RIght!");
	}

}


//  Fahrenheit to Celsius
// Kelvin wants to convert between temperature scales. Create fahrenheitToCelsius(fDegrees)
// that accepts a number of degrees in Fahrenheit, and returns the equivalent temperature as expressed
// in Celsius degrees. For review, Fahrenheit = (9/5 * Celsius) + 32.

function farenheitToCelcius(fDegrees){
	var celcius = 0;
	fDegrees = fDegrees - 32 ;
	fDegrees = fDegrees * 5;
	celcius = fDegrees / 9;
	return celcius;
}



//  Celsius to Fahrenheit
// Create celsiusToFahrenheit(cDegrees) that accepts number of degrees Celsius, and returns
// the equivalent temperature expressed in Fahrenheit degrees.
// (optional) Do Fahrenheit and Celsius values equate at a certain number? Scientific calculation can be
// complex, so for this challenge just try a series of Celsius integer values starting at 200, going downward
// (descending), checking whether it is equal to the corresponding Fahrenheit value.

function celciusToFarenheit(cDegrees){
	var farenheit = 0;
	cDegrees = cDegrees * 1.8 ;
	cDegrees = cDegrees + 32;
	farenheit = cDegrees;
	return farenheit;
}


//  Biggie Size
// Given an array, write a function that changes all
// positive numbers in the array to “big”. Example:
// makeItBig([-1,3,5,-5]) returns that same
// array, changed to [-1,"big","big",-5].

function biggieSize(x){
	for (var i = 0; i <= x.length ; i++) {
		console.log (x[i] + " :this is the index value")
		if (x[i] > 0){
			x.splice(x[i],1,"big");
			console.log(x + "thats the new array");
		}
	}
return x;
}


//  Print Low, Return High
// Create a function that takes array of numbers.
// The function should print the lowest value in the
// array, and return the highest value in the array.


//  Print One, Return Another
// Build a function that takes array of numbers. The
// function should print second-to-last value in the
// array, and return first odd value in the array.


//  Double Vision
// Given array, create a function to return a new
// array where each value in the original has been
// doubled. Calling double([1,2,3]) should
// return [2,4,6] without changing original.


//  Count Positives
// Given array of numbers, create function to
// replace last value with number of positive values.
// Example, countPositives([-1,1,1,1])
// changes array to [-1,1,1,3] and returns it.


//  Evens and Odds
// Create a function that accepts an array. Every
// time that array has three odd values in a row,
// print "That’s odd!" Every time the array has
// three evens in a row, print "Even more so!"


//  Increment the Seconds
// Given arr, add 1 to odd elements ([1], [3],
// etc.), console.log all values and return arr.


//  Previous Lengths
// You are passed an array containing strings.
// Working within that same array, replace each
// string with a number – the length of the string at
// previous array index – and return the array.


//  Add Seven to Most
// Build function that accepts array. Return a new
// array with all values except first, adding 7 to
// each. Do not alter the original array.


//  Reverse Array
// Given array, write a function to reverse values,
// in-place. Example: reverse([3,1,6,4,2])
// returns same array, containing [2,4,6,1,3].


//  Outlook: Negative
// Given an array, create and return a new one
// containing all the values of the provided array,
// made negative (not simply multiplied by -1).
// Given [1,-3,5], return [-1,-3,-5].


//  Always Hungry
// Create a function that accepts an array, and
// prints "yummy" each time one of the values is
// equal to "food". If no array elements are
// "food", then print "I'm hungry" once.


//  Swap Toward the Center
// Given array, swap first and last, third and third-tolast, etc. Input[true,42,"Ada",2,"pizza"]
// becomes ["pizza",42,"Ada",2,true].
// Change [1,2,3,4,5,6] to [6,2,4,3,5,1].


//  Scale the Array
// Given array arr and number num, multiply each
// arr value by num, and return the changed arr.