
function gameObject() {
    return {
      home: {
        teamName: "Brooklyn Nets",
        colors: ["Black", "White"],
        players: {
          "Alan Anderson": {
            number: 0,
            shoe: 16,
            points: 22,
            rebounds: 12,
            assists: 12,
            steals: 3,
            blocks: 1,
            slamDunks: 1,
          },
          "Reggie Evans": {
            number: 30,
            shoe: 14,
            points: 12,
            rebounds: 12,
            assists: 12,
            steals: 12,
            blocks: 12,
            slamDunks: 7,
          },
          "Brook Lopez": {
            number: 11,
            shoe: 17,
            points: 17,
            rebounds: 19,
            assists: 10,
            steals: 3,
            blocks: 1,
            slamDunks: 15,
          },
          "Mason Plumlee": {
            number: 1,
            shoe: 19,
            points: 26,
            rebounds: 12,
            assists: 6,
            steals: 3,
            blocks: 8,
            slamDunks: 5,
          },
          "Jason Terry": {
            number: 31,
            shoe: 15,
            points: 19,
            rebounds: 2,
            assists: 2,
            steals: 4,
            blocks: 11,
            slamDunks: 1,
          },
        },
    },
      away: {
        teamName: "Charlotte Hornets",
        colors: ["Turquoise", "Purple"],
        players: {
          "Jeff Adrien": {
            number: 4,
            shoe: 18,
            points: 10,
            rebounds: 1,
            assists: 1,
            steals: 2,
            blocks: 7,
            slamDunks: 2,
          },
          "Bismak Biyombo": {
            number: 0,
            shoe: 16,
            points: 12,
            rebounds: 4,
            assists: 7,
            steals: 7,
            blocks: 15,
            slamDunks: 10,
          },
          "DeSagna Diop": {
            number: 2,
            shoe: 14,
            points: 24,
            rebounds: 12,
            assists: 12,
            steals: 4,
            blocks: 5,
            slamDunks: 5,
          },
          "Ben Gordon": {
            number: 8,
            shoe: 15,
            points: 33,
            rebounds: 3,
            assists: 2,
            steals: 1,
            blocks: 1,
            slamDunks: 0,
          },
          "Brendan Haywood": {
            number: 33,
            shoe: 15,
            points: 6,
            rebounds: 12,
            assists: 12,
            steals: 22,
            blocks: 5,
            slamDunks: 12,
          },
        },
      },
    };
  }
  

const game = gameObject();
console.log(game);


function numPointsScored(playerName) {
    const teamKeys = Object.keys(game);
    for (const teamKey of teamKeys) {
      if (game[teamKey].players[playerName]) {
        return game[teamKey].players[playerName].points;
      }
    }
    return "Player not found";
  }

console.log(numPointsScored("Brendan Haywood"));


function shoeSize(playerName) {
    const teamKeys = Object.keys(game);
    for (const teamKey of teamKeys) {
      if (game[teamKey].players[playerName]) {
        return game[teamKey].players[playerName].shoe;
      }
    }
    return "Player not found";
  }

console.log(shoeSize("Ben Gordon"));


function teamColors(teamName) {
    const teamKeys = Object.keys(game);
    for (const teamKey of teamKeys) {
      if (game[teamKey].teamName === teamName) {
        return game[teamKey].colors;
      }
    }
    return "Team not found";
  }

console.log(teamColors("Brooklyn Nets"));


function teamNames() {
    return Object.values(game).map((team) => team.teamName);
  }
 
console.log(teamNames(game));


function playerNumbers(teamName) {
    const teamKey = Object.keys(game).find(
      (key) => game[key].teamName === teamName
    );
    if (teamKey) {
      return Object.values(game[teamKey].players).map((player) => player.number);
    }
    return "Team not found";
  }
  
console.log(playerNumbers("Charlotte Hornets"));


function playerStats(playerName) {
    const teamKeys = Object.keys(game);
    for (const teamKey of teamKeys) {
      if (game[teamKey].players[playerName]) {
        return game[teamKey].players[playerName];
      }
    }
    return "Player not found";
  }

console.log(playerStats("DeSagna Diop"));


function bigShoeRebounds() {
    let playerWithLargestShoe = null;
    let largestShoeSize = 0;
    const teamKeys = Object.keys(game);
    for (const teamKey of teamKeys) {
      const players = game[teamKey].players;
      const playerNames = Object.keys(players);
      for (const playerName of playerNames) {
        const playerShoeSize = players[playerName].shoe;
        if (playerShoeSize > largestShoeSize) {
          largestShoeSize = playerShoeSize;
          playerWithLargestShoe = playerName;
        }
      }
    }
    if (playerWithLargestShoe) {
      return game[teamKeys[0]].players[playerWithLargestShoe].rebounds;
    }
    return "No player found with the largest shoe size";
  }

console.log(bigShoeRebounds());


function mostPointsScored() {
    let mostPoints = 0;
    let playerWithMostPoints = null;
  
    for (const teamKey in game) {
      const players = game[teamKey].players;
  
      for (const playerName in players) {
        const player = players[playerName];
  
        if (player.points > mostPoints) {
          mostPoints = player.points;
          playerWithMostPoints = playerName;
        }
      }
    }
  
    return playerWithMostPoints;
  }
  
const mostPointsPlayer = mostPointsScored();
console.log(`Player with the most points: ${mostPointsPlayer}`);
  

function winningTeam() {
    let homeTeamPoints = 0;
    let awayTeamPoints = 0;
  
    for (const teamKey in game) {
      const players = game[teamKey].players;
  
      for (const playerName in players) {
        const player = players[playerName];
  
        if (teamKey === 'home') {
          homeTeamPoints += player.points;
        } else {
          awayTeamPoints += player.points;
        }
      }
    }
  
    if (homeTeamPoints > awayTeamPoints) {
      return game.home.teamName;
    } else {
      return game.away.teamName;
    }
  }
  
const winning = winningTeam();
console.log(`Winning Team: ${winning}`);
  

function playerWithLongestName() {
    let longestName = '';
    let playerWithLongestName = null;
  
    for (const teamKey in game) {
      const players = game[teamKey].players;
  
      for (const playerName in players) {
        if (playerName.length > longestName.length) {
          longestName = playerName;
          playerWithLongestName = playerName;
        }
      }
    }
  
    return playerWithLongestName;
  }
  
const longestNamePlayer = playerWithLongestName();
console.log(`Player with the longest name: ${longestNamePlayer}`);
 

function doesLongNameStealATon() {
    let longestName = '';
    let playerWithLongestName = null;
  
    for (const teamKey in game) {
      const players = game[teamKey].players;
  
      for (const playerName in players) {
        if (playerName.length > longestName.length) {
          longestName = playerName;
          playerWithLongestName = playerName;
        }
      }
    }
  
    if (playerWithLongestName) {
      for (const teamKey in game) {
        const players = game[teamKey].players;
  
        for (const playerName in players) {
          if (playerName === playerWithLongestName) {
            if (players[playerName].steals > 10) {
              return true;
            }
          }
        }
      }
    }
  
    return false;
  }
  
const stealsATon = doesLongNameStealATon();
console.log(`Does the player with the longest name steal a ton? ${stealsATon}`);
  