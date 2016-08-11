
var woolOwners = [
  {
    "master": 1
  },
  {
    "dame": 1
  },
  {
    "little boy": 1,
    "location": "down the lane"
  }
];




var haveYouAnyWool = function() {
    for (var i = 0; i < woolOwners.length; i++) {
      totalBags = totalBags + i;
      // console.log(i);
    }
    return totalBags;
};

var totalBags = 0;
var bags = haveYouAnyWool();

function baabaaBlackSheep() {
    console.log("BaaBaa BlackSheep have you any wool?");
    if (bags > 0) {
        console.log("yes sir, yes sir " + totalBags + " bags full");
  }
}

function oneForMy() {
    for (var i = 0; i < 2; i++) {
        people = Object.keys(woolOwners[i]);
        // console.log(people);
        var person = people.toString();
        console.log("one for my " + person);
    }
}

baabaaBlackSheep();
oneForMy();

var boy = woolOwners[2];
var littleBoy = Object.keys(boy)[0];


var whereHeLives = boy.location;
console.log("one for the " + littleBoy + " that lives " + whereHeLives);


