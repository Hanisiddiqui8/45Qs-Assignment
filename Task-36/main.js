/*
T-Shirt: Write a funcƟon called make_shirt() that accepts a size and the
text of a message that should be printed on the shirt. The function should print
a sentence summarizing the size of the shirt and the message printed on it.
Call the function.
*/
function make_shirt(size, printMessage) {
    console.log("You selected ".concat(size, " sized shirt with ").concat(printMessage, "printed on it"));
}
make_shirt("Medium", "You are precious");
make_shirt("Small", "Hani");