(function() {
  'use strict';
angular
      .module('anpr')
      .factory('postt', postt);


function postt($http) {
//var pos = this;
   //console.log("ff");
    //cat.categories = [];
	return{
	get: function(){return $http.get('https://api.myjson.com/bins/1ia4s')
	//.success(function(data){
  //cat.cats=data.categories;
  //})
  }}

}

})();
