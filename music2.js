let musicLibrary = {
  name: name,
  creator: creator,
  playlists: [{ name: playlist1, { title: title,
                                   rating: rating,
                                   length: length  } },
              { name: playlist2, { title: title,
                                   rating: rating,
                                   length: length, } }


function Library(name, creator) {
  this.name = name;
  this.creator = creator;
}

function Playlist(name) {
  this.name = name;
}

function Track(title, rating, length) {
  this.title = title;
  this.rating = rating;
  this.length = length;
}

let newLibrary = new Library('Reggae', 'Bob');
console.log(newLibrary);

let newPlaylist = new Playlist('Marley');
console.log(newPlaylist);

let newTrack



// prototype functions:

// Library
// Playlist
// Track

// functionality:

// A Library ONLY has a name and a creator(both strings)
// Need name & creator to create a music library
// A Library has many playlists(starts as an empty array)
// Playlist objects can be added to an instance of a library
// Each Playlist has a required name upon creation

// A Playlist also has many tracks
// A Track has a title, a rating(an integer from 1 to 5) and a length(integer in seconds). All required when creating a new track
// Each Playlist also has an overallRating
// function which will calculate the rating by averaging the rating of its tracks

// Each Playlist also has a totalDuration
// function which will sum the duration of all of its tracks

// Use new to instantiate these functions to create instances of one library and then add new tracks and playlists to the library.