module.exports = function ($scope, $http, $q, GameFactory) {
    var self = this;
    self.GameFactory = GameFactory;



    self.joinGame = function (game) {

        if (game.users.length < 2) {
            //   game.users[game.users.length] = "Bram";
            self.GameFactory.joinGame(game);
        } else {
            console.log("Game is full already");
        }
    }

    self.getGames = function () {
        $http({
            method: 'GET',
            url: 'https://mahjongmayhem.herokuapp.com/Games'
        }).then(function successCallback(response) {
            console.log(response.data);
            self.GameFactory.getGames(response.data);
        }, function errorCallback(response) {
          console.log(response);
        });
    }
}