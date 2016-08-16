export const WHITE = 1;
export const BLACK = -1;
export const NON   = 0;

function changePlayer(player){
  switch(player){
    case WHITE:
      return BLACK;
    case BLACK:
      return WHITE;
  }
}

function inc(num){
  return ++num;
}
function dec(num){
  return --num;
}
function alone(num){
  return num;
}

function survey(board, x, y, player, nextX, nextY, counter){
  if( y < 0 || x < 0) return counter;
  return (board[y][x] === player) ? survey(board, nextX(x), nextY(y), player, nextX, nextY, ++counter) : counter;
}

function Vertical(board, x, y, player){
  var top_y  = y - 1;
  var down_y = y + 1;
  return 1 +
    survey(board, x, down_y, player, alone, inc, 0) +
    survey(board, x, top_y, player, alone, dec, 0) ;
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
      let vertical = Vertical(state.board, action.x, action.y, state.player);
      let changed_player = changePlayer(state.player);
      var next_board = state.board;
      next_board[action.y][action.x] = state.player;
      var a = Object.assign({}, state, { board: next_board }, { player: changed_player })
        console.log(a);
      return a;
  }
  return state;
}

export default gomokuApp
