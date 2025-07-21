/*
Create a function that takes an array of football clubs with properties: name, wins, loss, draws, scored, 
conceded, and returns the team name with the highest number of points. If two teams have the same number of 
points, return the team with the largest goal difference.

team = { name: "Manchester United", wins: 30, loss: 3, draws: 5, scored: 88, conceded: 20 }

Total Points = 3 * wins + 0 * loss + 1 * draws = 3 * 30 + 0 * 3 + 5 * 1 = 95 points
Goal Difference = scored - conceded = 88 - 20 = 68

Input:
  - an array of object that represent football teams
Output:
  - A string the team name with the highest number of points,2 teams have the same number of points
    return the team with largest goal difference

Rules:
  - If 2 teams have the same number of points return the team with largest goal difference.
  - We have to compute the points by
    - 3 X wins + 0 X losses + 1 X draws === total points
  - We compute the goal difference by
    - scored - conceded 

Data Structure:
  - Callculate the total points and the goal difference into a new array of object
  - 

Algorithm:
  - Declare and empty object 
  - Iterate over array
    - Get the name of the team
    - Calculate the total points of team
    - Calculate the goal difference
  - Iterate over the new array
    - Declare a champ
      - if the current champ total < current team
        - champ assigned to current team
      - Else if the champ === curret team total
        - return the team with the hifgest goal difference

*/


function champions(teams) {
  let scores = [];

  teams.forEach(team => {
    let totalPoints = (3 * team['wins']) + (0 * team['loss']) + (1 * team['draws']);
    let goalDifference = team['scored'] - team['conceded'];

    scores.push({
      team: team['name'],
      points: totalPoints,
      diff: goalDifference
    })
  })

  let champ = scores[0];

  for (let team of scores) {
    if (team.points > champ.points) {
      champ = team;
    } else if (team.points === champ.points && team.diff > champ.diff) {
      champ = team;
    }
  }

  return champ.team;
}


console.log(champions([
  {
    name: "Manchester United",
    wins: 30,
    loss: 3,
    draws: 5,
    scored: 88,
    conceded: 20,
  },
  {
    name: "Arsenal",
    wins: 24,
    loss: 6,
    draws: 8,
    scored: 98,
    conceded: 29,
  },
  {
    name: "Chelsea",
    wins: 22,
    loss: 8,
    draws: 8,
    scored: 98,
    conceded: 29,
  },
  ]))