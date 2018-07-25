export const getPlayerInfo = (year) => {

    const URL = `https://data.nba.net/10s/prod/v1/${year}/players.json`;
    return fetch(URL).then((response) => response.json())
    .then((responseJson) => {
      //console.log(responseJson);
      return responseJson;
    })
    .catch((error) => {
      //console.error(error);
      return null;
    });

}

export const getCertainPlayerInfo = (id) => {

  const URL = `https://data.nba.net/10s/prod/v1/2018/players/${id}_profile.json`;
  return fetch(URL).then((response) => response.json())
  .then((responseJson) => {
    //console.log(responseJson);
    return responseJson;
  })
  .catch((error) => {
    //console.error(error);
    return null;
  });

}

export const getCertainPlayerImage = (last, first) => {

  const URL = `https://nba-players.herokuapp.com/players/${last}/${first}`;
  return URL;

}

export const getCertainTeamImage = (num) => {

  var teams = {
    1610612737 : 'atl',
    1610612751 : 'bkn',
    1610612738 : 'bos',
    1610612766 : 'cha',
    1610612741 : 'chi',
    1610612739 : 'cle',
    1610612742 : 'dal',
    1610612743 : 'den',
    1610612765 : 'det',
    1610612744 : 'gsw',
    1610612745 : 'hou',
    1610612754 : 'ind',
    1610612746 : 'lac',
    1610612747 : 'lal',
    1610612763 : 'mem',
    1610612748 : 'mia',
    1610612749 : 'mil',
    1610612750 : 'min',
    1610612740 : 'nop',
    1610612752 : 'nyk',
    1610612760 : 'okc',
    1610612753 : 'orl',
    1610612755 : 'phi',
    1610612756 : 'phx',
    1610612757 : 'por',
    1610612758 : 'sac',
    1610612759 : 'sas',
    1610612761 : 'tor',
    1610612762 : 'uta',
    1610612764 : 'was',
  };

  const URL = `https://i.cdn.turner.com/nba/nba/.element/img/1.0/teamsites/logos/teamlogos_500x500/${teams[num]}.png`;
  return URL;

}