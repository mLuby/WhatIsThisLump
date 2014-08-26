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
        remove: function(object){
          db.$remove(object.$id);
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
      .when('/lumps/last', {
        controller:'GoToLastLumpCtrl',
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
        redirectTo:'/lumps/0'
      });
  })
  .controller('GoToRandomLumpCtrl', function($scope, $location, Db){
    var randomLumpId = Math.floor(Math.random()*Db.array().length);
    console.log('There are',Db.array().length,"lumps; going to",randomLumpId,"at random.");
    $location.path('/lumps/'+randomLumpId);      
  })
  .controller('GoToLastLumpCtrl', function($scope, $location, Db){
    var lastLumpId = Db.array().length-1;
    console.log('There are',Db.array().length,"lumps; going to",lastLumpId+".");
    $location.path('/lumps/'+lastLumpId);      
  })
  .controller('LumpCtrl', function($scope, $routeParams, $location, Db) {
      var lumps = Db.array();
      $scope.lump = lumps[ $routeParams.lumpId ];

      if(!$scope.lump){$location.path('/InvalidLump');};

      $scope.benign = function(){
        $scope.lump.benign++;
        lumps.$save($scope.lump);
        $scope.next();
      };
      $scope.malignant = function(){
        $scope.lump.malignant++;
        var diagnosis = prompt("Do you know what this lump is?");
        if(diagnosis){
          if(!$scope.lump.diagnoses){ $scope.lump.diagnoses = []; }
          console.log('diagnosis:',diagnosis);
          $scope.lump.diagnoses.push(diagnosis);
        }
        lumps.$save($scope.lump);
        $scope.next();
      };
      $scope.flag = function(){
        var complaint = prompt("What is wrong with this lump?");
        if(!$scope.lump.flagged){$scope.lump.flagged = 0;}
        $scope.lump.flagged++;
        if(complaint){
          if(!$scope.lump.complaints){$scope.lump.complaints = [];}
          $scope.lump.complaints.push(complaint);
        }
        lumps.$save($scope.lump).then(function(){
          if($scope.lump.flagged >= 2){
            console.log('2 people flagged this lump; removing',$scope.lump.$id);
            Db.remove($scope.lump);
          }
          $scope.next();
        });
      }
      $scope.next = function(){
        $location.path('/lumps/'+(Number($routeParams.lumpId)+1));
      };
  })
  .controller('CreateCtrl', function($scope, $location, Db ) {
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
      Db.push(newLump);
      $location.path('/lumps/random')
    }
  }); 