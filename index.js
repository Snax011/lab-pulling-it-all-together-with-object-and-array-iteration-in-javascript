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
                "Reggie Evens": {
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
                "Bismack Biyombo": {
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
                "Brendan Hayword": {
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

function allPlayers() {
    const game = gameObject();
    const combinedPlayers = {};

    Object.keys(game.home.players).forEach(function (playerName) {
        combinedPlayers[playerName] = game.home.players[playerName];
    });

    Object.keys(game.away.players).forEach(function (playerName) {
        combinedPlayers[playerName] = game.away.players[playerName];
    });

    return combinedPlayers;
}

function numPointsScored(playerName) {
    const players = allPlayers();
    return players[playerName].points;
}

function shoeSize(playerName) {
    const players = allPlayers();
    return players[playerName].shoe;
}

function teamColors(teamName) {
    const game = gameObject();
    const teams = [game.home, game.away];
    const team = teams.find(function (currentTeam) {
        return currentTeam.teamName === teamName;
    });

    return team.colors;
}

function teamNames() {
    const game = gameObject();
    return [game.home.teamName, game.away.teamName];
}

function playerNumbers(teamName) {
    const game = gameObject();
    const teams = [game.home, game.away];
    const team = teams.find(function (currentTeam) {
        return currentTeam.teamName === teamName;
    });

    return Object.values(team.players).map(function (playerStats) {
        return playerStats.number;
    });
}

function playerStats(playerName) {
    const players = allPlayers();
    return players[playerName];
}

function bigShoeRebounds() {
    const players = Object.values(allPlayers());
    let biggestShoePlayer = players[0];

    players.forEach(function (player) {
        if (player.shoe > biggestShoePlayer.shoe) {
            biggestShoePlayer = player;
        }
    });

    return biggestShoePlayer.rebounds;
}

function mostPointsScored() {
    const players = Object.entries(allPlayers());
    let highestScorer = players[0];

    players.forEach(function (playerEntry) {
        if (playerEntry[1].points > highestScorer[1].points) {
            highestScorer = playerEntry;
        }
    });

    return highestScorer[0];
}

function winningTeam() {
    const game = gameObject();
    const teams = [game.home, game.away];

    const scores = teams.map(function (team) {
        const totalPoints = Object.values(team.players).reduce(function (sum, player) {
            return sum + player.points;
        }, 0);

        return {
            name: team.teamName,
            points: totalPoints,
        };
    });

    return scores[0].points > scores[1].points ? scores[0].name : scores[1].name;
}

function playerWithLongestName() {
    const playerNames = Object.keys(allPlayers());
    let longestName = playerNames[0];

    playerNames.forEach(function (name) {
        if (name.length > longestName.length) {
            longestName = name;
        }
    });

    return longestName;
}

function doesLongNameStealATon() {
    const playersObject = allPlayers();
    const players = Object.entries(playersObject);
    const longestNamePlayer = playerWithLongestName();

    let mostStealsPlayer = players[0][0];
    players.forEach(function (playerEntry) {
        if (playerEntry[1].steals > playersObject[mostStealsPlayer].steals) {
            mostStealsPlayer = playerEntry[0];
        }
    });

    return longestNamePlayer === mostStealsPlayer;
}