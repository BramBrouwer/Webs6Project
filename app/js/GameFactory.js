module.exports = function(){
    var factory = {};
    
    factory.games = [
        // {id : 1, timestamp : Date.now(), started : false , users : ["Henk","Jan"]},
        // {id : 2, timestamp : Date.now(), started : false , users : ["Bram","Kevin"]},
        // {id : 3, timestamp : Date.now(), started : false , users : []},
    ]
    
    factory.addGame = function(){
        factory.games.push({ timestamp : Date.now(), started : false , users : []})
        console.log(factory.games);
    }
    
    factory.joinGame = function(game){
             game.users.push("Bram");
    }
    
    
    

    
    
    
    
    return factory;
    
};