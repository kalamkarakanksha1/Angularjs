(function(angular) {
    'use strict';

    var app = angular.module('puzzleApp', ['slidingPuzzle']);
   
    app.controller('slidingAdvancedCtrl', function($scope) {
    	    	var puzzle ={
    			src:"img/isentia1.jpg",
    			title:"ISENTIA",
    			rows:"3",
    			cols:"3"
    	} 
    	 	   	
        $scope.puzzle = puzzle;
    	alert("----"+puzzle.title);
    });



})(window.angular);