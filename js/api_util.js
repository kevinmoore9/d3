const APIUtil = {

  getGames: (team) => (
    $.ajax({
      type: "GET",
      url: `https://api.mysportsfeeds.com/v1.1/pull/mlb/2016-regular/full_game_schedule.json?team=${team}`,
      // dataType: 'json',
      async: false,
      headers: {
        "Authorization": "Basic " + btoa("kevinmoore9" + ":" + "SFgiants1")
      },
    })
  ),

  getPlayByPlay: (date, away, home) => (
    $.ajax({
      type: "GET",
      url: `https://api.mysportsfeeds.com/v1.1/pull/mlb/2016-regular/game_playbyplay.json?gameid=${date}-${away}-${home}`,
      // dataType: 'json',
      async: false,
      headers: {
        "Authorization": "Basic " + btoa("kevinmoore9" + ":" + "SFgiants1")
      },
    })
  )
}


module.exports = APIUtil;
