angular.module('WhatIsThisLump', ['ngRoute', 'firebase'])
  .value('firebaseURL', 'https://whatisthislump.firebaseio.com/')
  // .factory('db', function($firebase, firebaseURL){
  //   var db = $firebase(new Firebase(firebaseURL+'/lumps'));
  //   db.loadArray = function(){
  //     return db.$asArray().$loaded(
  //       function(res){ return res }, 
  //       function(err){ console.log('db.loadArray ERROR:',err); }
  //     );
  //   };
  //   db.getId = function(id){
  //     return db.$asArray().$loaded(
  //       function(res){ return res.$getRecord(res.$keyAt(id)) }, 
  //       function(err){ console.log('db.byId ERROR:',err); }
  //     );
  //   }
  //   return db;
  // })
  // .factory('Lumps', function() {
  //   return [
  //     {
  //       "patient": "Bob",
  //       "location": "Little Rock, AR",
  //       "src": "http://www.tips-how.com/wp-content/uploads/2010/12/Bruises.jpg",
  //       "symptoms": "Painful, might be infected.",
  //       "benign": 0,
  //       "malignant": 0
  //     },
  //     {
  //       "patient": "Peter",
  //       "location": "Boston, MA",
  //       "src": "http://31.media.tumblr.com/tumblr_lxl7yrWy4k1r8lbh5o1_400.jpg",
  //       "symptoms": "Was bitten by genetic spider at the lab. Now this is infected and tender.",
  //       "benign": 0,
  //       "malignant": 0
  //     },
  //     {
  //       "patient": "Roger",
  //       "location": "Pensacola, FL",
  //       "src": "http://nationalnailfungus.org/wp-content/uploads/2013/01/15.jpg",
  //       "symptoms": "No pain. Yellowed nail. Has looked about the same for 5 months.",
  //       "benign": 0,
  //       "malignant": 0
  //     },
  //     {
  //       "patient": "Cassie",
  //       "location": "Ann Arbor, MI",
  //       "src": "http://www.hamptonpodiatry.com.au/wps/wp-content/gallery/plantar-wart/plantar-wart-1.jpg",
  //       "symptoms": "Hurts to walk on. No itch.",
  //       "benign": 0,
  //       "malignant": 0
  //     },
  //     {
  //       "patient": "Denise",
  //       "location": "Portland, OR",
  //       "src": "http://i1264.photobucket.com/albums/jj494/JedHuf/E4F7889D-A62A-4B87-B8EA-73D28B7DDF3F-557-00000049BCFD0E61.jpg",
  //       "symptoms": "Painful. Feels swollen. Not sure if infected.",
  //       "benign": 0,
  //       "malignant": 0
  //     },
  //     {
  //       "patient": "George",
  //       "location": "Tampa, FL",
  //       "src": "http://www.healthinplainenglish.com/health/skin/kaposis_sarcoma/pictures/kaposis-sarcoma.jpg?__SQUARESPACE_CACHEVERSION=1289432307928",
  //       "symptoms": "Flat area. Not itchy. Getting bigger weekly.",
  //       "benign": 0,
  //       "malignant": 0
  //     },
  //     {
  //       "patient": "Karen",
  //       "location": "Hamilton, MA",
  //       "src": "http://eczemaandyourlife.com/wp-content/uploads/2012/05/eczema_stomach.jpg",
  //       "symptoms": "Dry skin. Very itchy, especially after showering.",
  //       "benign": 0,
  //       "malignant": 0
  //     },
  //     {
  //       "patient": "Dennis",
  //       "location": "Sonoma, CA",
  //       "src": "http://medicalanatomy.net/wp-content/uploads/hives-32.jpg",
  //       "symptoms": "It's itchy and it bleeds when I scratch it.",
  //       "benign": 0,
  //       "malignant": 0
  //     },
  //     {
  //       "patient": "Leyla",
  //       "location": "Brunswick, ME",
  //       "src": "http://image.improve.com/articles/3001_3100/Yeast-Infection-and-Skin-Rash-3042_l_6957a95364c85f29.jpg",
  //       "symptoms": "Itchy rash, gets worse when sweaty.",
  //       "benign": 0,
  //       "malignant": 0
  //     },
  //     {
  //       "patient": "Mina",
  //       "location": "Pittsburgh, PA",
  //       "src": "http://www.askwiki.net/inc/upload/658/how_to_get_rid_of_canker_sores_350.jpg",
  //       "symptoms": "Painful and sore.",
  //       "benign": 0,
  //       "malignant": 0
  //     },
  //     {
  //       "patient": "Stephen",
  //       "location": "Akron, OH",
  //       "src": "http://www.skincareihub.com/wp-content/uploads/2010/12/symptoms-of-carbuncles.jpg",
  //       "symptoms": "Sore when I touch it. It's oozing clear liquid.",
  //       "benign": 0,
  //       "malignant": 0
  //     }
  //     // {
  //     //   "patient": "Andria",
  //     //   "location": "Smyrna, TN",
  //     //   "src":
  //     //   "http://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/articles/health_tools/precancerous_lesions_slideshow/PRinc_photo_of_skin_cancer_screening.jpg",
  //     //   "symptoms": "Slightly raised, tender patch.",
  //     //   "benign": 0,
  //     //   "malignant": 0
  //     // },
  //     // {
  //     //   "patient": "Joseph",
  //     //   "location": "Milwaukee, WI",
  //     //   "src": "http://skin212.com/images/Basal%20Cell%20Skin%20Cancer%20NYC.jpg",
  //     //   "symptoms": "Has gotten bigger over 3 months. Bleeds occasionally.",
  //     //   "benign": 0,
  //     //   "malignant": 0
  //     // },
  //     // {
  //     //   "patient": "Kara",
  //     //   "location": "Denver, CO",
  //     //   "src": "http://shingleshealthaware.com/images/shinglesimg/What-Do-Shingles-Look-Like.jpg",
  //     //   "symptoms": "Painful band around side. Slight fever two days ago.",
  //     //   "benign": 0,
  //     //   "malignant": 0
  //     // },
  //     // {
  //     //   "patient": "Craig",
  //     //   "location": "Storrs, CT",
  //     //   "src": "http://s3.amazonaws.com/f01.justanswer.com/JACUSTOMER7yixz9am/2011-03-29_190326_lump.jpg",
  //     //   "symptoms": "Raised bump. Extremely itchy.",
  //     //   "benign": 0,
  //     //   "malignant": 0
  //     // },
  //     // {
  //     //   "patient": "Rick",
  //     //   "location": "Elkmont, AL",
  //     //   "src": "http://diseaseslist.org/wp-content/uploads/2012/09/tick-bite-photo-300x229.jpg",
  //     //   "symptoms": "Red spot. Not itchy. Rash around spot?",
  //     //   "benign": 0,
  //     //   "malignant": 0
  //     // },
  //     // {
  //     //   "patient": "Susan",
  //     //   "location": "Seattle, WA",
  //     //   "src": "http://www.bedbugsprayguide.com/wp-content/uploads/2013/07/Bed-bug-Bite.jpg",
  //     //   "symptoms": "Really itchy. Looks like bite.",
  //     //   "benign": 0,
  //     //   "malignant": 0
  //     // },
  //     // {
  //     //   "patient": "Andre",
  //     //   "location": "Chicago, IL",
  //     //   "src": "http://upload.wikimedia.org/wikipedia/commons/3/3d/Pityriasis_versicolor_frontal_retouche.jpg",
  //     //   "symptoms": "Mild itch. Spread to neck area after one week.",
  //     //   "benign": 0,
  //     //   "malignant": 0
  //     // }
  //   ];
  // })
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
        // increment benign votes.
        console.log("increment benign votes.");
        $scope.lump.benign++;
        // $scope.lump.$save();
        $scope.next();
      };
      $scope.malignant = function(){
        console.log("increment malignant votes.");
        $scope.lump.malignant++;
        console.log('presave');
        lumps.$save($scope.lump);
        console.log('postsave');
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
  .controller('CreateCtrl', function($scope, $location, Db ) {
    console.log('Db',Db);
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