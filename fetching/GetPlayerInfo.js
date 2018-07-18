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