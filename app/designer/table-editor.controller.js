(function() {
    'use strict';
    angular
	.module('app')
	.controller('DialogController', DialogController);

	function DialogController($mdDialog, DesignerService) {
		var vm = this;
		
		vm.test = "Hi There";

		vm.items = [{
		name: 'item1',
		group: 'Group 1'
		}, {
		name: 'item2',
		group: 'Group 1'
		}, {
		name: 'item3',
		group: 'Group 2'
		}, {
		name: 'item4',
		group: 'Group 2'
		}, {
		name: 'item5',
		group: 'Group 3'
		}];


// Here I'm just calculating the groups when the controller runs
// You would probably want to use a $watch if you expected the list to change
  vm.groupList = vm.items.reduce(function(previous, current) {
    if (previous.indexOf(current.group) === -1) {
      previous.push(current.group);
    }

    return previous;
  }, []);
		
		vm.hide = function() {
		  $mdDialog.hide();
		};

		vm.cancel = function() {
		  $mdDialog.cancel();
		};

		vm.answer = function(answer) {
		  $mdDialog.hide(answer);
		};
	}
})();
