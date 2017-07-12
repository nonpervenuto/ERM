(function() {
    'use strict';
    angular
	.module('app')
	.controller('DesignerController', DesignerController);

	function DesignerController($mdDialog, DesignerService) {
		var vm = this;
		vm.name = 'ciao';
		vm.showAdvanced = showAdvanced;
		
		vm.model = DesignerService.data;
		
		activate();
		
		function activate() {
			
		}
		
		function showAdvanced(ev) {
			$mdDialog.show({
				templateUrl: 'designer/template.html',
				parent: angular.element(document.body),
				targetEvent: ev,
				clickOutsideToClose:true
			})
			.then(function(answer) {
				vm.status = 'You said the information was "' + answer + '".';
			}, function() {
				vm.status = 'You cancelled the dialog.';
			});
		}
	}
})();
