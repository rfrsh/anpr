(function() {
  'use strict';
angular
      .module('anpr')
      .factory('categories', categories);


function categories($http) {
	return{
	get: function(){return $http.get('https://api.myjson.com/bins/1ia4s');},
    get1: function(){
  var rootRef = new Firebase('https://anwp.firebaseio.com/categories');
  return rootRef;
  }
  }

}

})();
