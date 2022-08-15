const gameObject = () => {
    return {
        home:{
            teamname: "Brooklyn Nets",
            colors: ["Black","White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds:12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1
                    
                },
                "Reggie Evans":{
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds:12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7
                },
                "Brook Lopez":{
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds:19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15
                },
                "Mason Plumlee":{
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds:12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5
                },
                "Jason Terry":{
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds:2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1
                }
            }
        },
        away:{
            teamname: "Charlotte Hornets",
            colors: ["Turquoise","Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds:1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2
                    
                },
                "Bismack Biyombo":{
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds:4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10
                },
                "Desagna Diop":{
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds:12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5
                },
                "Ben Gordon":{
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds:3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0
                },
                "Brendan Haywood":{
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12
                }
            }}
    }
}
        
// player functions

function numPointsScored(playerName){
    let player = findPlayer(playerName);
    return player["points"]
}

function shoeSize(playerName){
    let player = findPlayer(playerName);
    return player["shoe"]
}

function playerStats(playerName){
    let player = findPlayer(playerName)
    return player
}

function findPlayer(playerName){
    let game = gameObject();
    let foundPlayer
    for(let team in game){
        let playersArray = Object.keys(game[team]["players"])
        foundPlayer = playersArray.find((player) => player === playerName)
        if(foundPlayer){
            return game[team]["players"][foundPlayer]
        }
    }
}


function getPlayerAttribute(playerName, attribute){
    let player = findPlayer(playerName);
    return player[attribute]
}

function bigShoeRebounds(){
    let game = gameObject();
    let biggestShoe = 0
    let biggestShoePlayer
    for(let team in game){
        let players = findTeam(game[team]["teamname"])["players"];
        for(let player in players){
            let size = shoeSize(player)
            if(size > biggestShoe){
                biggestShoe = size
                biggestShoePlayer = player
            }
        }

    }
    return getPlayerAttribute(biggestShoePlayer, "rebounds")
}



// team functions
function teamColors(teamName){
    let teamInfo = findTeam(teamName)
    return teamInfo["colors"]
}

function playerNumbers(teamName){
    let teamInfo = findTeam(teamName);
    let players = teamInfo["players"];
    let numbers = []
    for(let player in players){
        numbers.push(players[player]["number"])
    }
    return numbers
}

function findTeam(teamName){
    const game = gameObject();
    for(let team in game){
        let teamInfo = game[team]
        if(teamInfo["teamname"] === teamName){
            return teamInfo
        }
    }
}

