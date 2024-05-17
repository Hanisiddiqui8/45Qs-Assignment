/*
Alien Colors #3: Turn your if-else chain from Exercises 25-26 into an if-else chain.
• If the alien is green, print a message that the player earned 5 points.
• If the alien is yellow, print a message that the player earned 10 points.
• If the alien is red, print a message that the player earned 15 points.
• Write three versions of this program, making sure each message is printed for the appropriate color
alien.
*/

//Define Variable
let alienColor = "Green";

//Using If & Else-If Statements:
//Version 01
if (alienColor === "Green"){
    console.log("You shot down Green alien, you earn 5 points");
}
else if(alienColor=== "Yellow") {
    console.log("You shot down Yellow alien, you earn 10 points ");
}
else if (alienColor === "Red"){
    console.log("You shot down Red alien, you earn 15 points");
}

//Version 02

let alienColor2 = "Yellow";
if (alienColor2 === "green"){
    console.log("You shot down green alien, you earn 5 points")
}
else if(alienColor2=== "Yellow"){
    console.log("You shot down yellow alien, you earn 10 points");
}
else if(alienColor2=== "Red"){
    console.log("You shot down red alien, you earn 15 points");
}

//Version 3
let alienColor3 = "Red";
if(alienColor3 === "Green"){
    console.log("You shot down green alien, just earn 15 points");
}
else if (alienColor3 === "Yellow"){
    console.log("You shot down yellow alienColor, you earn 10 points");
}
else if (alienColor3 === "Red"){
    console.log("You shot down red alien, you earn 15 points");
}