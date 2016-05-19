(function() {
  'use strict';

  angular
    .module('anpr')
    .controller('CategoriesController', CategoriesController);

  /** @ngInject */
  function CategoriesController(categories) {
  var vm = this;
  vm.count = 0;
    vm.myFunc = function() {
        vm.count++;
    };
   
   
  var rootRef = categories.get1();
  var onLen;
  rootRef.on("value", function(snapshot) {
   vm.cats=(snapshot.val());
   console.log((vm.cats));
   //console.log(Object.keys(vm.cats).length);
   onLen = Object.keys(vm.cats).length;
   //console.log(onLen);
   
});
vm.addCategory = function(cat){
  console.log(rootRef.lenght);
  rootRef.child(onLen).set(cat);
  inputCat.value='';
    }
 
 //catego.get().success(function(data){vm.cats=data.categories;});
 
 
  }
})();
