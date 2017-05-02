export const SET_GAMES = 'SET_GAMES';
export const ADD_GAME = 'ADD_GAME';

function handleResponse(response) {
  if (response.ok) {
    return response.json();
  }  else {
      let error = new Error(response.statusText);
      error.response = response;
      throw error;
  }
}

export function addGame(game) {
  return {
    type: ADD_GAME,
    game
  }
}

export function setGames(games){
  return {
    type: SET_GAMES,
    games
  }
}

export function fetchGames() {
  return dispath => {
    fetch('/api/games')
    .then(res => res.json())
    .then(data => dispath(setGames(data.games)));
  }
}


export function saveGame(data) {
  return dispath => {
    return fetch('/api/games', {
      method: 'post',
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(handleResponse)
    .then(data => dispath(addGame(data.game)));
  }
}
