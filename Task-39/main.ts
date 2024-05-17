/*
 City Names: Write a funcƟon called city_country() that takes in the name
of a city and its country. The funcƟon should return a string formaƩed like this:
"Lahore, Pakistan"
Call your funcƟon with at least three city-country pairs, and print the value
that’s returned.
*/

//Creating a function with parameters that return values in string
function city_country(city: string, country: string): string {
    return`${city}, ${country}`
}

//Calling the function and print the return value
city_country("Karachi", "Pakistan");
console.log(city_country("Karachi", "Pakistan"));

city_country("Tokyo", "Japan")
console.log(city_country( "Tokyo", "Japan"));

city_country("Bern", "Switzeland");
console.log(city_country ("Bern","Switzerland"))