angular.module('WhatIsThisLump', ['ngRoute', 'firebase'])
  .value('firebaseURL', 'https://whatisthislump.firebaseio.com/')
  .factory('Lumps', function($firebase, firebaseURL) {
    return [{
        "patient": "bob",
        "src": "http://www.tips-how.com/wp-content/uploads/2010/12/Bruises.jpg",
        "symptoms": ["painful"],
        "benign": 0,
        "malignant": 0
      },{
        "patient": "alice",
        "src": "http://31.media.tumblr.com/tumblr_lxl7yrWy4k1r8lbh5o1_400.jpg",
        "symptoms": ["infected", "tender"],
        "benign": 0,
        "malignant": 0
      }];
    // return $firebase(new Firebase(fbURL)).$asArray();
  })
  .config(function($routeProvider) {
    $routeProvider
      // .when('/', {
      // })
      .when('/lumps/:lumpId', {
        controller:'LumpCtrl',
        templateUrl:'lump.html'
      })
      .when('/lumps/create', {
        controller:'CreateCtrl',
        templateUrl:'create.html'
      })
      .otherwise({
        // redirectTo:'/'
        controller:'GoToRandomLumpCtrl',
        templateUrl:'lump.html'
      });
  })
  .controller('GoToRandomLumpCtrl', function($scope, $location, Lumps){
    var randomLumpId = Math.floor(Math.random()*Lumps.length);
    console.log('There are',Lumps.length,"lumps; going to",randomLumpId,"at random.");    
    $location.path('/lumps/'+randomLumpId);
  })
  .controller('LumpCtrl', function($scope, $routeParams, Lumps) {
      var lumpId = $routeParams.lumpId
      console.log("Displaying lump",lumpId);
      // var counter = 0;
      // $scope.lump = Lumps[counter];
      $scope.lump = Lumps[lumpId];
      console.log($scope.lump);

      $scope.next = function(){
        // load next lump.
        console.log("load new lump.");
        counter++;
        $scope.lump = $scope.lumps[counter];
      };
      $scope.benign = function(){
        // increment benign votes.
        console.log("increment benign votes.");
        $scope.lump.benign++;
        console.log($scope.lump);
        // lump.save();
        // $scope.next();
      };
      $scope.malignant = function(){
        console.log("increment malignant votes.");
        $('#container').animate({
            opacity: 0
          }, 'fast', function(el){ $('#container').animate({
              opacity: 1
          }, 'fast'); });
          
        $scope.lump.malignant++;
        console.log($scope.lump);
        // lump.save();
        // $scope.next();
      };
      // $scope.next();
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
