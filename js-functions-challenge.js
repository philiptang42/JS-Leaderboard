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

// teamObject = function(team){
//   return {team: team}
// };

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

var teamScore = function(){

}


console.log(teamNames());
