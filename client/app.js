console.log('This is the client app.');


// FIREBASE

// var firebaseRef = 'https://firepano.firebaseio.com/';

function handleImageUpload(event) {
  console.log('handleImageUpload triggered');
  var fileToUpload = event.target.files[0];
  console.log(fileToUpload);

  // reader.onload = (function(theFile) {
  //   console.log( theFile.target.result; );
  // })();

  console.log(  $(".pic")[0].src );
  $(".pic")[0].src = theFile.target.result;

}
  /*
  var reader = new FileReader();
  reader.onload = (function(theFile) {
    return function(e) {
      var filePayload = e.target.result;
      // Generate a location that can't be guessed using the file's contents and a random number
      var hash = CryptoJS.SHA256(Math.random() + CryptoJS.SHA256(filePayload));
      var fileToUpload = new Firebase(firebaseRef + 'pano/' + hash + '/filePayload');
      // Set the file payload to Firebase and register an onComplete handler to stop the spinner and show the preview
      fileToUpload.set(filePayload, function() { 
        document.getElementById("pic").src = e.target.result;
        // Update the location bar so the URL can be shared with others
        window.location.hash = hash;
      });
    };
  })(fileToUpload);
  reader.readAsDataURL(fileToUpload);
  */

var populateLump = function(lump){
  $('.pic').attr('src',"../database/"+lump.src);
  $('.patient').text(lump.patient); 
};

$(document).ready(function() {
  console.log('jquery working');
  $(".upload").on('change', handleImageUpload);

  // pic random lump
  var random = Math.floor(Math.random()*db.lumps.length);
  var lump = db.lumps[random];
  console.log("lump #"+random+":",lump);
  populateLump(lump);

    // A hash was passed in, so let's retrieve and render it.
    
  /*
    var f = new Firebase(firebaseRef + '/pano/' + hash + '/filePayload');
    f.once('value', function(snap) {
      var payload = snap.val();
      if (payload != null) {
        $(".pic").first().src = payload;
      } else {
        $('#body').append("Not found");
      }
      spinner.stop();
    });
  }
  */
});
