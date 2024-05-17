/*
CiƟes: Write a funcƟon called describe_city() that accepts the name of
a city and its country. The funcƟon should print a simple sentence, such as
Karachi is in Pakistan. Give the parameter for the country a default value.
Call your funcƟon for three different ciƟes, at least one of which is not in the
default country.
*/

//Creating a function
function describe_city(city : string = "", Country: string = "Pakistan"){
    console.log(`${city} is in ${Country}`);
}

//Calling the Fucntion
describe_city("Karachi");

describe_city("Lahore");

describe_city("Toronto", "Canada");
