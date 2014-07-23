var app = angular.module('tictactoeApp',  []);

app.controller('TicTacController', function ($scope) {

	$scope.cells = [
	{position:''},
	{position:''},
	{position:''},
	{position:''},
	{position:''},
	{position:''},
	{position:''},
	{position:''},
	{position:''},
	] ;
	$scope.playerpick = function(c) {

		//if cells[c] 
	}
	/*$scope.playerpick = function(nowCell) {
		nowCell.position = "X";
	} ;

	$scope.playerpick = function(nextCell) {
		nextCell.position = "O";
	} ; */

});





