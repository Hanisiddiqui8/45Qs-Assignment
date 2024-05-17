/*
. Large Shirts: Modify the make_shirt() funcƟon so that shirts are large
by default with a message that reads I love TypeScript. Make a large shirt and a
medium shirt with the default message, and a shirt of any size with a different
message.
*/

//Creating a Function by default values
function make_shirt (size: String = "Large", printMessage: string = "I love TypeScript"){
    console.log(`Creating a ${size} shirt with ${printMessage} message printed on it`)
}

//Calling the function
make_shirt();

//Calling the function with Medium sized shirt and the default message
make_shirt("Medium");

//Calling the function with different size and message
make_shirt("Small", "I love JavaScript");