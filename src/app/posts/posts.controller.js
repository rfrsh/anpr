(function() {
  'use strict';

  angular
    .module('anpr')
    .controller('PostsController', PostsController);

  /** @ngInject */
  function PostsController(postt) {
   var vm = this;
 postt.get().success(function(data){
  vm.postss=data.posts;
  //console.log(pos.postss);
  });
 
  }
})();
