const APIUtil = require("./api_util");

// debugger
let games = APIUtil.getGames("BOS");
let plays = APIUtil.getPlayByPlay("20160427", "OAK", "DET")
console.log(plays.responseJSON);

// "https://api.mysportsfeeds.com/v1.1/pull/mlb/2016-regular/cumulative_player_stats.json?playerstats=AB,H,R,HR,ER"


// game schedule: "https://api.mysportsfeeds.com/v1.1/pull/mlb/2016-regular/full_game_schedule.json?team=OAK"

// play by play: "https://api.mysportsfeeds.com/v1.1/pull/mlb/2016-regular/game_playbyplay.json?gameid=20160427-OAK-DET"
