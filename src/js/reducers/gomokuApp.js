import * as config from '../config/'
import * as board from '../libs/board'
import * as player from '../libs/player'

const initialState = {
  player: config.FIRST_PLAYER,
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
  ],
  histories:[],
  win: undefined

}

import * as ActionTypes from '../action/gomoku'

function gomokuApp(state = initialState, action){
  switch(action.type){
    case ActionTypes.PUT:
      var next_board = state.board;
      next_board[action.y][action.x] = state.player;

      return  Object.assign({}, 
          state, 
          { board: next_board }, 
          { player: player.ChangePlayer(state.player, config.WHITE, config.BLACK) },
          { histories: [{ 
              player: state.player,
              x: action.x,
              y: action.y
            }, ...state.histories]
          }
          ,
          { win: board.Win(state.board, action.x, action.y, state.player) }
      )
  }
  return state;
}

export default gomokuApp
