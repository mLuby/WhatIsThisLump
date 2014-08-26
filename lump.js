angular.module('whatisthislump', ['ngRoute', 'firebase'])
  .controller('lumpCtrl', function($scope){

    console.log("initiating lumpCtrl...");
    $scope.lumps = [
      {
        "patient": "bob",
        "src": "knee-lump.jpg",
        "symptoms": ["painful", "swelling"]
      },
      {
        "patient": "alice",
        "src": "neck-lump.jpg",
        "symptoms": ["infected", "green"]
      }
    ];
    var counter = -1;
    $scope.lump = $scope.lumps[counter];

    $scope.next = function(){
      // load next lump.
      console.log("load new lump.");
      counter++;
      $scope.lump = $scope.lumps[counter];
    };
    $scope.benign = function(){
      // increment benign votes.
      console.log("increment benign votes.");
      lump.benign++;
      lump.save();
      $scope.next();
    };
    $scope.malignant = function(){
      console.log("increment malignant votes.");
      lump.malignant++;
      lump.save();
      $scope.next();
    };

    $scope.next();
  });