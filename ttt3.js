var tictactoeApp = angular.module('tictactoeApp', []);
var checkWin;
var alertWin;

tictactoeApp.controller('TicTacController', function ($scope) {
//setup board of empty arrays
  $scope.cells = [
  {status: ' '}, 
  {status: ' '},
  {status: ' '},
  {status: ' '},
  {status: ' '},
  {status: ' '},
  {status: ' '},
  {status: ' '},
  {status: ' '}
  ];

//counter to set clicks to X or 0 
$scope.count = 0;

$scope.clickedCell = function(index) {
  if ($scope.cells[index].status == ' ') {

    if ($scope.count % 2 == 0 ) {
      $scope.cells[index].status = 'X';

    } else {
      $scope.cells[index].status = 'O';
    } 
    $scope.count+=1;
    $scope.checkWin();
  }
  
}

//win function
$scope.checkWin = function() {
 //first row win
 if ($scope.cells[0].status  === $scope.cells[1].status && 
  $scope.cells[1].status === $scope.cells[2].status &&
  $scope.cells[0].status !== ' ') {
  //alert('win!'); 
  $scope.alertWin();
 } //second row win
 else if ($scope.cells[3].status  === $scope.cells[4].status && 
  $scope.cells[4].status === $scope.cells[5].status && $scope.cells[3].status !== ' ') {
  $scope.alertWin();
} //third row win
else if ($scope.cells[6].status  === $scope.cells[7].status && 
  $scope.cells[7].status === $scope.cells[8].status && $scope.cells[6].status !== ' ') {
  $scope.alertWin();
} //first column win
else if ($scope.cells[0].status  === $scope.cells[3].status && 
  $scope.cells[3].status === $scope.cells[6].status && $scope.cells[0].status !== ' ') {
  $scope.alertWin();
} //second column win
else if ($scope.cells[1].status  === $scope.cells[4].status && 
  $scope.cells[4].status === $scope.cells[7].status && $scope.cells[4].status !== ' ') {
  $scope.alertWin();
} //third column win
else if ($scope.cells[2].status  === $scope.cells[5].status && 
  $scope.cells[5].status === $scope.cells[8].status && $scope.cells[2].status !== ' ') {
  $scope.alertWin();
}
//left to right diagonal win 
else if ($scope.cells[0].status  === $scope.cells[4].status && 
  $scope.cells[4].status === $scope.cells[8].status && $scope.cells[4].status !== ' ') {
  $scope.alertWin();
} //right to left diagonal win
else if ($scope.cells[2].status  === $scope.cells[4].status && 
  $scope.cells[4].status === $scope.cells[6].status && $scope.cells[4].status !== ' ') {
  $scope.alertWin();
}
else if ($scope.count === 9) 
  alert('its a tie :(');

};


//reset button
$scope.reset = function(c){
  location.reload(true);
};

//alert winner
$scope.alertWin =  function() {
  if ($scope.count % 2 == 0 ) {
     alert('O is the winner');
 } else
    alert('X is the winner');
};

});


