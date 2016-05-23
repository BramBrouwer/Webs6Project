require('angular/angular');

// Create your app
var app = angular.module('webs6', []);
var gameFactory = require('./GameFactory');
var gameController = require('./GameController')
app.factory('GameFactory', gameFactory);
app.controller('GameController',['$scope','$http','$q','GameFactory',gameController])