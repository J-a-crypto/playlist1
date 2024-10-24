// Complete Day 1 goals here
let song1 = {
  name: "Without You",
  artist: "Kid Laroi",
  length: "3:45",
  image: "https://i.ytimg.com/vi/nzalnIKug94/maxresdefault.jpg",
  link: "https://www.youtube.com/watch?v=SJOKlqJho8U&ab_channel=TheKidLAROI."
};
let song2 = {
  name: "I'm Not In Love",
  artist: "10cc",
  length: "3:45",
  image:
    "https://i.pinimg.com/originals/2c/37/c2/2c37c2ffea9e1b0d139deb61b7612f33.jpg",
  link: "https://www.youtube.com/watch?v=STugQ0X1NoI&ab_channel=10ccVEVO"
};

let song3 = {
  name: "This is Love",
  artist: "Maroon 5",
  length: "3:25",
  image: "https://upload.wikimedia.org/wikipedia/en/b/bf/This_Love_cover.png",
  link: "https://www.youtube.com/watch?v=XPpTgCho5ZA"
};

let Songs = [song1, song2, song3];

/*
let songName = ["Without You","Im Not In Love","This is Love"];
let songArtist = ["Kid Laroi","10cc","Maroon 5"];
let songLength = ["3:02","3:45","3:25"];
let songURL = ["https://i.ytimg.com/vi/nzalnIKug94/maxresdefault.jpg","https://i.pinimg.com/originals/2c/37/c2/2c37c2ffea9e1b0d139deb61b7612f33.jpg","https://upload.wikimedia.org/wikipedia/en/b/bf/This_Love_cover.png"];
let songLink = ["https://www.youtube.com/watch?v=SJOKlqJho8U&ab_channel=TheKidLAROI.","https://www.youtube.com/watch?v=STugQ0X1NoI&ab_channel=10ccVEVO","https://www.youtube.com/watch?v=XPpTgCho5ZA"];
*/

function displaySongInfo() {
  // We only have 1 array "Songs"! How can we simplify this code to a single loop? - Gilbert
  //So can I just put appends in the loop for each property and the value will show up? -> Try it! - Gilbert
  /*for (let names of songName){
    $(".songs").append(`<p>${names}</p>`);
  }
  for (let artist of songArtist){
    $(".artists").append (`<p>${artist}</p>`);
  }
  for (let length of songLength ) {
    $(".lengths").append (`<p>${length}</p>`);
  }
  for (let image of songURL) {
    $(".images").append (`<img src= ${image}>`);
  }
  for (let link of songLink ){
    $(".links").append (`<a href = "${link}"> Youtube Link </a>`);
  } */
  for (let song of Songs) {
    //so the name? -> close! "song" was good! but we'd want to get the "name" property from each of the "song" objects! let's change the line below - Gilbert
    $(".songs").append(`<p>${song.name}</p>`); // close! but instead of trying to get the property "name" from the array itself (vs. the element of the array), which of the two loop variables has this property?
    $(".artists").append(`<p>${song.artist}</p>`);
    $(".lengths").append(`<p>${song.length}</p>`);
    $(".images").append(`<img src= ${song.image}>`);
    $(".links").append(`<a href = "${song.link}"> Listen</a>`);
    // nice!
    //ohhhhh that flew over my head -> lol all good, it's weird to think about - Gilbert
    // I feel like I understand it but when its being explained to me through writing it just confuses me a bit -> Sorry! Trying not to give you answers directly, but it's hard to word... My bad!
    // ITs fine I understand more clearly now so I can complete todays objective -> nice! try to see if you can also get "addSongInfo" to work! -> Bet!
  }

  // Complete the Day 2 goals inside this function
}

function emptySongInfo() {
  /* this function empties the divs each time the button is 
  clicked so that your playlist does not repeatedly add the data
  too many times. Try commenting out this function call to see 
  what happens without it! */
  $(".songs").empty();
  $(".images").empty();
  $(".artists").empty();
  $(".lengths").empty();
  $(".links").empty();
}

function addSongInfo() {
  // Complete Day 3 goals inside this function
  let sName = $(".song").val();
  //Songs.name = sName;
  let sArtist = $(".artist").val();
  //Songs.artist.push(sArtist);
  let sLength = $(".length").val();
  //Songs.length.push(sLength);
  let sLink = $(".link").val();
  //Songs.l.push(sLink);
  let sImage = $(".image").val();
  // Songs.name.push(sImage);

  let InputSong = {
    name: sName,
    artist: sArtist,
    length: sLength,
    image: sLink,
    link: sImage
  };
  Songs.push(InputSong);
}

///Experiment///
/*I added this just in case the user doesn't like the color scheme, they can randomize the color with each song they add! */
function random() {
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  var bgColor = "rgb(" + x + "," + y + "," + z + ")";

  console.log(bgColor);
  $(".display").css("background-color", `${bgColor}`);
}

$("#add").click(function() {
  emptySongInfo();
  addSongInfo();
  displaySongInfo();
  random();
});

displaySongInfo();
