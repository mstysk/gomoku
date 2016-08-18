export const WHITE = 1;
export const BLACK = -1;
export const NON   = 0;

function ChangePlayer(player){
  switch(player){
    case WHITE:
      return BLACK;
    case BLACK:
      return WHITE;
  }
}

function Inc(num){
  return ++num;
}
function Dec(num){
  return --num;
}
function Alone(num){
  return num;
}

function Survey(board, x, y, player, nextX, nextY, counter){
  if( y < 0 || x < 0) return counter;
  return (board[y][x] === player) ? Survey(board, nextX(x), nextY(y), player, nextX, nextY, ++counter) : counter;
}

function Vertical(board, x, y, player){
  return 1 +
    Survey(board, x, y + 1, player, Alone, Inc, 0) +
    Survey(board, x, y - 1, player, Alone, Dec, 0) ;
}

function Horizon(board, x, y, player){
  return 1 +
    Survey(board, x + 1, y, player, Inc, Alone, 0) +
    Survey(board, x - 1, y, player, Dec, Alone, 0) ;
}

function UpperRight(board, x, y, player){
  return 1 +
    Survey(board, x + 1, y - 1, player, Inc, Dec, 0) +
    Survey(board, x - 1, y + 1, player, Dec, Inc, 0) ;
}

function DownRight(board, x, y, player){
  return 1 +
    Survey(board, x + 1, y + 1, player, Inc, Inc, 0) +
    Survey(board, x - 1, y - 1, player, Dec, Dec, 0) ;
}


const initialState = {
  player: WHITE,
  board:[
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  ]
}

import * as ActionTypes from '../action/gomoku'

function gomokuApp(state = initialState, action){
  switch(action.type){
    case ActionTypes.PUT:
      let vertical    = Vertical(  state.board, action.x, action.y, state.player);
      let horizon     = Horizon(   state.board, action.x, action.y, state.player);
      let upper_right = UpperRight(state.board, action.x, action.y, state.player);
      let down_right  = DownRight( state.board, action.x, action.y, state.player);

      var next_board = state.board;
      next_board[action.y][action.x] = state.player;
      return  Object.assign({}, state, { board: next_board }, { player: ChangePlayer(state.player) })
  }
  return state;
}

export default gomokuApp
