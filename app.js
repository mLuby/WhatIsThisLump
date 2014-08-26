angular.module('WhatIsThisLump', ['ngRoute', 'firebase'])
  .value('firebaseURL', 'https://whatisthislump.firebaseio.com/')
  .service('Db', function($firebase, firebaseURL) {
      var myData = null;
      var db = $firebase(new Firebase(firebaseURL+'/lumps'))
      var promise = db.$asArray().$loaded(function (data) {
        promisedData = data;
      }, function(err){console.log('error', err);});
      return {
        promise: promise,
        push: function(object){
          db.$push(object);
        },    
        array: function () {
          return promisedData;
        }
      };
  })
  .config(function($routeProvider) {
    $routeProvider
      .when('/lumps/random', {
        controller:'GoToRandomLumpCtrl',
        templateUrl:'lump.html',
        resolve: {
          'thisCanBeCalledWhatever':function(Db){
            return Db.promise;
          }
        }
      })
      .when('/lumps/:lumpId', {
        controller:'LumpCtrl',
        templateUrl:'lump.html',
        resolve: {
          'thisCanBeCalledWhatever':function(Db){
            return Db.promise;
          }
        }
      })
      .when('/create/', {
        controller:'CreateCtrl',
        templateUrl:'create.html',
        resolve: {
          'thisCanBeCalledWhatever':function(Db){
            return Db.promise;
          }
        }
      })
      .otherwise({
        redirectTo:'/lumps/random'
      });
  })
  .controller('GoToRandomLumpCtrl', function($scope, $location, Db){
    var randomLumpId = Math.floor(Math.random()*Db.array().length);
    console.log('There are',Db.array().length,"lumps; going to",randomLumpId,"at random.");
    $location.path('/lumps/'+randomLumpId);      
  })
  .controller('LumpCtrl', function($scope, $routeParams, $location, Db) {
      var lumps = Db.array();
      $scope.lump = lumps[ $routeParams.lumpId ];

      $scope.benign = function(){
        $scope.lump.benign++;
        lumps.$save($scope.lump);
        $scope.next();
      };
      $scope.malignant = function(){
        $scope.lump.malignant++;
        lumps.$save($scope.lump);
        $scope.next();
      };
      $scope.next = function(){
        $location.path('/lumps/random');
      };
  })
  .controller('CreateCtrl', function($scope, $location, Db, Lumps ) {
    $scope.create = function(){
      console.log('trying to create lump:');
       var newLump = {
        "patient": $scope.patient,
        "location": $scope.location,
        "src": $scope.src,
        "symptoms": $scope.symptoms,
        "benign": 0,
        "malignant": 0
      }
      Db.push(Lumps);
      $location.path('/lumps/random')
    }
  });