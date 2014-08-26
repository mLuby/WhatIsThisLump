console.log("This is the server...");

var Firebase = require("firebase");

var db = new Firebase("https://whatisthislump.firebaseio.com/");
var lumps = db.child('lumps');

// Add a lump:
// lumps.push({
//   "patient": "bob",
//   "src": "knee-lump.jpg",
//   "symptoms": ["painful", "swelling"]
// });

// Gets all lumps (and as they are modified):
lumps.on('value', function (snapshot) {
    console.log("snapshot.val():",snapshot.val());
  }, function (errorObject) {
    console.log('The read failed:',errorObject.code);
  }
);


