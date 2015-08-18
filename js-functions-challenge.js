var gameInfo = function(){
  return [
   {
     home_team: "Patriots",
     away_team: "Broncos",
     home_score: 7,
     away_score: 3
   },
   {
     home_team: "Broncos",
     away_team: "Colts",
     home_score: 3,
     away_score: 0
   },
   {
     home_team: "Patriots",
     away_team: "Colts",
     home_score: 11,
     away_score: 7
   },
   {
     home_team: "Steelers",
     away_team: "Patriots",
     home_score: 7,
     away_score: 21
   }
 ]
}

// YOUR CODE HERE


var teamNames = function(){
  var teams = [];
  for (var i = 0; i < gameInfo().length; i++) {
    var homeTeam = gameInfo()[i].home_team;
    var awayTeam = gameInfo()[i].away_team;
    teams.push(homeTeam)
    teams.push(awayTeam)
    // teams.push(teamObject(homeTeam));
    // teams.push(teamObject(awayTeam));
  };
  var onlyUnique = function(value, index, self) {
      return self.indexOf(value) === index;
  };
  var teams = teams.filter( onlyUnique );
  return teams;
};

var winners = function(){
  var winners = [];

  for (var i = 0; i < gameInfo().length; i++) {
    var homeTeam = gameInfo()[i].home_team;
    var awayTeam = gameInfo()[i].away_team;

    if (gameInfo()[i].home_score > gameInfo()[i].away_score) {
      winners.push(homeTeam);
    } else {
      winners.push(awayTeam);
    }
  };
  return winners;
};

var losers = function(){
  var losers = [];

  for (var i = 0; i < gameInfo().length; i++) {
    var homeTeam = gameInfo()[i].home_team;
    var awayTeam = gameInfo()[i].away_team;

    if (gameInfo()[i].away_score < gameInfo()[i].home_score) {
      losers.push(awayTeam);
    } else {
      losers.push(homeTeam);
    }
  };
  return losers;
};

var numwins = function() {

}
console.log(teamNames());
console.log(winners());
console.log(losers());
