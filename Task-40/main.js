/*
 Album: Write a funcƟon called make_album() that builds an Object
describing a music album. The funcƟon should take in an artist name and an
album title, and it should return a Object containing these two pieces of
informaƟon. Use the funcƟon to make three dicƟonaries represenƟng different
albums. Print each return value to show that Objects are storing the
album informaƟon correctly.
Add an opƟonal parameter to make_album() that allows you to store the
number of tracks on an album. If the calling line includes a value for the number
of tracks, add that value to the album’s Object. Make at least one new
funcƟon call that includes the number of tracks on an album.
*/
//Define make_album function
function make_album(artist_name, album_title, tracks) {
    var album = {
        artist: artist_name,
        title: album_title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
//Calling three functions and creatimg three variables with different values
make_album("Hani", "Album title1");
var album1 = make_album("Hani", "Album title 1");
var album2 = make_album("Usman", "Albumtitle 2");
//Calling the make_album function by calling the 3rd parameter
var album3 = make_album("Alara", "Albumtitle 3", 10);
//Print the variables
console.log(album1);
console.log(album2);
console.log(album3);
