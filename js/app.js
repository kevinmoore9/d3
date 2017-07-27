const APIUtil = require("./api_util");

// debugger
// let games = APIUtil.getGames("BOS");
// let plays = APIUtil.getPlayByPlay("20160427", "OAK", "DET")
// console.log(plays.responseJSON);

APIUtil.getGames("BOS").then(data => {
  console.log(data.fullgameschedule.gameentry[0]);
});


// "https://api.mysportsfeeds.com/v1.1/pull/mlb/2016-regular/cumulative_player_stats.json?playerstats=AB,H,R,HR,ER"
