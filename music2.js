//---------------------------------------------
function Library(name, creator) {
  this.name = name;
  this.creator = creator;
  this.playlists = [];
}

function Playlist(name) {
  this.name = name;
  this.tracks = [];
}

function Track(title, rating, length) {
  this.title = title;
  this.rating = rating;
  this.length = length;
}
//--------------------------------------------------------------

Library.prototype.addPlaylist = function (Playlist) {
  this.playlists.push(Playlist);
}

Playlist.prototype.addTrack = function (Track) {
  this.tracks.push(Track);
}

Playlist.prototype.overallRating = function overallRating () {
  const ratings = this.tracks.map(track => track.rating);
  const sum = ratings.reduce((acc, c) => acc + c, 0);
  return Math.round(sum / ratings.length);
}
Playlist.prototype.totalDuration = function totalDuration () {
  const lengths = this.tracks.map(track => track.length);
  const sum = lengths.reduce((acc, c) => acc + c, 0);
  return Math.round(sum / lengths.length);
}

//---------------------------------------------------------------

let newLibrary = new Library('Oldies', 'John');

let playlist1 = new Playlist('Marley');

let track1 = new Track('Buffalo Soldier', 4, 180);
let track2 = new Track('I shot the sheriff', 2, 140);
let track3 = new Track('No woman no cry', 5, 160);

let playlist2 = new Playlist('Queen');

let track4 = new Track('Killer Queen', 1, 300);
let track5 = new Track('Under Pressure', 5, 200);
let track6 = new Track('We Will Rock You', 3, 400);

playlist1.addTrack(track1);
playlist1.addTrack(track2);
playlist1.addTrack(track3);

playlist2.addTrack(track4);
playlist2.addTrack(track5);
playlist2.addTrack(track6);

newLibrary.addPlaylist(playlist1);
newLibrary.addPlaylist(playlist2);

//--------------------------------------------------------------

// console.log(newLibrary);
// console.log(newLibrary.playlists);
// console.log(newLibrary.playlists[0]);
// console.log(newLibrary.playlists[0].totalDuration());
// console.log(newLibrary.playlists[1].overallRating());

// let musicLibrary = {
//   name: name,
//   creator: creator,
//   playlists: [
//     {
//       name: name,
//       tracks: [
//         {
//           title: title,
//           rating: rating,
//           length: length
//         },
//         {
//           title: title,
//           rating: rating,
//           length: length,
//         }
//       ],
//       overallRating: fn(),
//       totalDuration: fn()
//     },
//     {
//       name: name,
//       tracks: [
//         {
//           title: title,
//           rating: rating,
//           length: length
//         },
//         {
//           title: title,
//           rating: rating,
//           length: length,
//         }
//       ],
//       overallRating: fn(),
//       totalDuration: fn()
//     }
//   ]
// }

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