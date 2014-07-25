var tictactoeApp = angular.module('tictactoeApp', []);

tictactoeApp.controller('TicTacController', function ($scope) {

	$scope.cells = [
	 {position: ' '}, 
	 {position: ' '},
	 {position: ' '},
	 {position: ' '},
	 {position: ' '},
	 {position: ' '},
	 {position: ' '},
	 {position: ' '},
	 {position: ' '}
];
	
	
	$scope.count = 0;

	$scope.clickedCell = function(placeholder) {
		if ($scope.cells[placeholder].position == ' ') {
			
			if ($scope.count % 2 == 0 ) {
				$scope.cells[placeholder].position = 'X';
			} else {
				$scope.cells[placeholder].position = 'O';
			}	
			$scope.count+=1;
		}
	}
});


