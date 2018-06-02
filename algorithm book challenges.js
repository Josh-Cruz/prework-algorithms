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




//  Whoa, That Sucker’s Huge…
// Add odd integers from -300,000 to 300,000, and
// console.log the final sum. Is there a shortcut?
//  Countdown by Fours
// Log positive numbers starting at 2016, counting
// down by fours (exclude 0), without a FOR loop.
//  Flexible Countdown
// Based on earlier “Countdown by Fours”, given
// lowNum, highNum, mult, print multiples of mult
// from highNum down to lowNum, using a FOR.
// For (2,9,3), print 9 6 3 (on successive lines).
//  The Final Countdown
// This is based on “Flexible Countdown”. The parameter names are not as helpful, but the problem is
// essentially identical; don’t be thrown off! Given 4 parameters (param1,param2,param3,param4),
// print the multiples of param1, starting at param2 and extending to param3. One exception: if a
// multiple is equal to param4, then skip (don’t print) it. Do this using a WHILE. Given (3,5,17,9), print
// 6,12,15 (which are all of the multiples of 3 between 5 and 17, and excluding the value 9)