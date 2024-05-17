/*
Animals: Think of at least three different animals that have a common characterisƟc.
Store the names of these animals in a list, and then use a for loop to
print out the name of each animal.
• Modify your program to print a statement about each animal, such as
A dog would make a great pet.
• Add a line at the end of your program staƟng what these animals have in
common. You could print a sentence such as Any of these animals would make a great pet!
*/

let petAnimals = ["Dog", "Molly", "Cat", "Dove"]

//Using for-loop
for(let onePet of petAnimals){
    console.log(`A ${onePet} would make a great pet.`)
    //writting the code within the loop to know the difference between writing it inside & outside of the loop
    //console.log("Any of these animals would make a great pet\n")
}

//Print a message outiside the for-loop
console.log("Any of these animals would make a great pet")
