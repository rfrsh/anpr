(function() {
  'use strict';

  angular
    .module('anpr')
    .directive('newButton', newButton);

  /** @ngInject */
  function newButton() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/nbut/nbut.html',
      scope: {
          
      },
      controller: NbutController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function NbutController(moment, $location) {
      var vm = this;
	  vm.hide11=function(){
	  var mod = document.querySelector('#myModal');
	  mod.className = 'modal show';
	  setTimeout(function() {mod.className = 'modal fade';}, 3000);
	  }

      // "vm.creationDate" is available by directive option "bindToController: true"
      //vm.relativeDate = moment(vm.creationDate).fromNow();	  
  //vm.isActive=function(viewLocation){var active = (viewLocation === $location.path());  return active;}
    }
  }

})();
