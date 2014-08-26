angular.module('WhatIsThisLump', ['ngRoute', 'firebase'])
  .value('firebaseURL', 'https://whatisthislump.firebaseio.com/')
  .factory('Lumps', function($firebase, firebaseURL, $q) {
    //   var db = $firebase(new Firebase(firebaseURL)).$asObject();
    // var getLumps = function() {
    //   var deferred = $q.defer();

    //   db.$loaded().then(function(data) {
    //     console.log("db has lumps", data.lumps);
    //     deferred.resolve( db.lumps );
    //   });

    //   return deferred.promise;
    // };

    // return {
    //   getLumps: getLumps
    // };

    return [
      {
        "patient": "Bob",
        "location": "Little Rock, AR",
        "src": "http://www.tips-how.com/wp-content/uploads/2010/12/Bruises.jpg",
        "symptoms": "Painful, might be infected.",
        "benign": 0,
        "malignant": 0
      },
      {
        "patient": "Peter",
        "location": "Boston, MA",
        "src": "http://31.media.tumblr.com/tumblr_lxl7yrWy4k1r8lbh5o1_400.jpg",
        "symptoms": "Was bitten by genetic spider at the lab. Now this is infected and tender.",
        "benign": 0,
        "malignant": 0
      },
      {
        "patient": "Roger",
        "location": "Pensacola, FL",
        "src": "http://nationalnailfungus.org/wp-content/uploads/2013/01/15.jpg",
        "symptoms": "No pain. Yellowed nail. Has looked about the same for 5 months.",
        "benign": 0,
        "malignant": 0
      },
      {
        "patient": "Cassie",
        "location": "Ann Arbor, MI",
        "src": "http://www.hamptonpodiatry.com.au/wps/wp-content/gallery/plantar-wart/plantar-wart-1.jpg",
        "symptoms": "Hurts to walk on. No itch.",
        "benign": 0,
        "malignant": 0
      },
      {
        "patient": "Denise",
        "location": "Portland, OR",
        "src": "http://i1264.photobucket.com/albums/jj494/JedHuf/E4F7889D-A62A-4B87-B8EA-73D28B7DDF3F-557-00000049BCFD0E61.jpg",
        "symptoms": "Painful. Feels swollen. Not sure if infected.",
        "benign": 0,
        "malignant": 0
      },
      {
        "patient": "George",
        "location": "Tampa, FL",
        "src": "http://www.healthinplainenglish.com/health/skin/kaposis_sarcoma/pictures/kaposis-sarcoma.jpg?__SQUARESPACE_CACHEVERSION=1289432307928",
        "symptoms": "Flat area. Not itchy. Getting bigger weekly.",
        "benign": 0,
        "malignant": 0
      },
      {
        "patient": "Karen",
        "location": "Hamilton, MA",
        "src": "http://eczemaandyourlife.com/wp-content/uploads/2012/05/eczema_stomach.jpg",
        "symptoms": "Dry skin. Very itchy, especially after showering.",
        "benign": 0,
        "malignant": 0
      },
      {
        "patient": "Dennis",
        "location": "Sonoma, CA",
        "src": "http://medicalanatomy.net/wp-content/uploads/hives-32.jpg",
        "symptoms": "It's itchy and it bleeds when I scratch it.",
        "benign": 0,
        "malignant": 0
      },
      {
        "patient": "Leyla",
        "location": "Brunswick, ME",
        "src": "http://image.improve.com/articles/3001_3100/Yeast-Infection-and-Skin-Rash-3042_l_6957a95364c85f29.jpg",
        "symptoms": "Itchy rash, gets worse when sweaty.",
        "benign": 0,
        "malignant": 0
      },
      {
        "patient": "Mina",
        "location": "Pittsburgh, PA",
        "src": "http://www.askwiki.net/inc/upload/658/how_to_get_rid_of_canker_sores_350.jpg",
        "symptoms": "Painful and sore.",
        "benign": 0,
        "malignant": 0
      },
      {
        "patient": "Stephen",
        "location": "Akron, OH",
        "src": "http://www.skincareihub.com/wp-content/uploads/2010/12/symptoms-of-carbuncles.jpg",
        "symptoms": "Sore when I touch it. It's oozing clear liquid.",
        "benign": 0,
        "malignant": 0
      }
      // {
      //   "patient": "Andria",
      //   "location": "Smyrna, TN",
      //   "src":
      //   "http://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/articles/health_tools/precancerous_lesions_slideshow/PRinc_photo_of_skin_cancer_screening.jpg",
      //   "symptoms": "Slightly raised, tender patch.",
      //   "benign": 0,
      //   "malignant": 0
      // },
      // {
      //   "patient": "Joseph",
      //   "location": "Milwaukee, WI",
      //   "src": "http://skin212.com/images/Basal%20Cell%20Skin%20Cancer%20NYC.jpg",
      //   "symptoms": "Has gotten bigger over 3 months. Bleeds occasionally.",
      //   "benign": 0,
      //   "malignant": 0
      // },
      // {
      //   "patient": "Kara",
      //   "location": "Denver, CO",
      //   "src": "http://shingleshealthaware.com/images/shinglesimg/What-Do-Shingles-Look-Like.jpg",
      //   "symptoms": "Painful band around side. Slight fever two days ago.",
      //   "benign": 0,
      //   "malignant": 0
      // },
      // {
      //   "patient": "Craig",
      //   "location": "Storrs, CT",
      //   "src": "http://s3.amazonaws.com/f01.justanswer.com/JACUSTOMER7yixz9am/2011-03-29_190326_lump.jpg",
      //   "symptoms": "Raised bump. Extremely itchy.",
      //   "benign": 0,
      //   "malignant": 0
      // },
      // {
      //   "patient": "Rick",
      //   "location": "Elkmont, AL",
      //   "src": "http://diseaseslist.org/wp-content/uploads/2012/09/tick-bite-photo-300x229.jpg",
      //   "symptoms": "Red spot. Not itchy. Rash around spot?",
      //   "benign": 0,
      //   "malignant": 0
      // },
      // {
      //   "patient": "Susan",
      //   "location": "Seattle, WA",
      //   "src": "http://www.bedbugsprayguide.com/wp-content/uploads/2013/07/Bed-bug-Bite.jpg",
      //   "symptoms": "Really itchy. Looks like bite.",
      //   "benign": 0,
      //   "malignant": 0
      // },
      // {
      //   "patient": "Andre",
      //   "location": "Chicago, IL",
      //   "src": "http://upload.wikimedia.org/wikipedia/commons/3/3d/Pityriasis_versicolor_frontal_retouche.jpg",
      //   "symptoms": "Mild itch. Spread to neck area after one week.",
      //   "benign": 0,
      //   "malignant": 0
      // }
    ];

  })
  .config(function($routeProvider) {
    console.log('next thing after promise');
    $routeProvider
      .when('/lumps/random', {
        controller:'GoToRandomLumpCtrl',
        templateUrl:'lump.html'
      })
      .when('/lumps/:lumpId', {
        controller:'LumpCtrl',
        templateUrl:'lump.html'
      })
      .when('/lumps/create', {
        controller:'CreateCtrl',
        templateUrl:'create.html'
      })
      .otherwise({
        redirectTo:'/lumps/random'
      });
  })
  .controller('GoToRandomLumpCtrl', function($scope, $location, Lumps){
    var randomLumpId = Math.floor(Math.random()*Lumps.length);
    console.log('There are',Lumps.length,"lumps; going to",randomLumpId,"at random.");    
    $location.path('/lumps/'+randomLumpId);      
  })
  .controller('LumpCtrl', function($scope, $routeParams, $location, Lumps) {
      var lumpId = $routeParams.lumpId
      console.log("Displaying lump",lumpId);
      $scope.lump = Lumps[lumpId];

      $scope.benign = function(){
        // increment benign votes.
        console.log("increment benign votes.");
        $scope.lump.benign++;
        // lump.save();
        $scope.next();
      };
      $scope.malignant = function(){
        console.log("increment malignant votes.");
        $scope.lump.malignant++;
        // lump.save();
        $scope.next();
      };
      $scope.next = function(){
        // load next lump.
        $('#container').animate({
            opacity: 0
          }, 'fast', function(el){ $('#container').animate({
              opacity: 1
          }, 'fast'); });
        $location.path('/lumps/random');
      };
  })
  .controller('CreateCtrl', function($scope, $location) {
    console.log('Creating a lump.');
    // $scope.save = function() {
    //     Projects.$add($scope.project).then(function(data) {
    //         $location.path('/');
    //     });
    // };
  })
   
  /*.controller('EditCtrl',
    function($scope, $location, $routeParams, Projects) {
      var projectId = $routeParams.projectId,
          projectIndex;
   
      $scope.projects = Projects;
      projectIndex = $scope.projects.$indexFor(projectId);
      $scope.project = $scope.projects[projectIndex];
   
      $scope.destroy = function() {
          $scope.projects.$remove($scope.project).then(function(data) {
              $location.path('/');
          });
      };
   
      $scope.save = function() {
          $scope.projects.$save($scope.project).then(function(data) {
             $location.path('/');
          });
      };
  });
  */


  // FIREBASE

  // var firebaseRef = 'https://firepano.firebaseio.com/';
  /*
  function handleImageUpload(event) {
    console.log('handleImageUpload triggered');
    var fileToUpload = event.target.files[0];
    console.log(fileToUpload);

    reader.onload = (function(theFile) {
      console.log( theFile.target.result; );
    })();

    console.log(  $(".pic")[0].src );
    $(".pic")[0].src = theFile.target.result;

  }
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
