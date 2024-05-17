/*
Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locaƟons in a array. Make sure the array is not in alphabeƟcal order.
• Print your array in its original order.
• Print your array in alphabeƟcal order without modifying the actual list.
• Show that your array is sƟll in its original order by prinƟng it.
• Print your array in reverse alphabeƟcal order without changing the order of the original list.
• Show that your array is sƟll in its original order by prinƟng it again.
• Reverse the order of your list. Print the array to show that its
order has changed.
• Reverse the order of your list again. Print the list to show it’s back to its original order.
• Sort your array so it’s stored in alphabeƟcal order. Print the array to show that its order has been
changed.
• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order
has changed.
*/
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//Making array for places to visit in its original order
var placesToVisit = ["Makkah", "Switzerland", "Paris", "Egypt", "Cappadocia"];
console.log("Original Order:", placesToVisit);
//To Print the array in alphabetical order without changing the original array, for this we used sort function and to make a copy of our list we used the 3 dots function
console.log("Alphabetical Order:", __spreadArray([], placesToVisit, true).sort());
//To show the array is still in its original order
console.log("Still in Original order", placesToVisit);
//To Print the array in reverse order without changing the original one
console.log("Reverse order:", __spreadArray([], placesToVisit, true).reverse());
//To show the array is still in its original order
console.log("Still in Original order", placesToVisit);
//We have changed the order of the original array
console.log("Original Array Reversed", placesToVisit.reverse());
//To print the array to show it is back to its original order
console.log("Back to Original Order", placesToVisit.reverse());
//To print the array in order to show that the array is sorted in alphabetical order
console.log("Sorted in alphabetical order", placesToVisit.sort());
//We again have changed the order of the original array
console.log("Original Array Reversed", placesToVisit.reverse());
