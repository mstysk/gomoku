

export function Inc(num){
  return ++num;
}
export function Dec(num){
  return --num;
}
export function Alone(num){
  return num;
}

export function Survey(board, x, y, player, nextX, nextY, counter){
  if( y < 0 || x < 0) return counter;
  return (board[y][x] === player) ? Survey(board, nextX(x), nextY(y), player, nextX, nextY, ++counter) : counter;
}

export function Vertical(board, x, y, player){
  return 1 +
    Survey(board, x, y + 1, player, Alone, Inc, 0) +
    Survey(board, x, y - 1, player, Alone, Dec, 0) ;
}

export function Horizon(board, x, y, player){
  return 1 +
    Survey(board, x + 1, y, player, Inc, Alone, 0) +
    Survey(board, x - 1, y, player, Dec, Alone, 0) ;
}

export function UpperRight(board, x, y, player){
  return 1 +
    Survey(board, x + 1, y - 1, player, Inc, Dec, 0) +
    Survey(board, x - 1, y + 1, player, Dec, Inc, 0) ;
}

export function DownRight(board, x, y, player){
  return 1 +
    Survey(board, x + 1, y + 1, player, Inc, Inc, 0) +
    Survey(board, x - 1, y - 1, player, Dec, Dec, 0) ;
}

export function Win( board, x, y, player) {
  return (
    Vertical(  board, x, y, player) >= 5 ||
    Horizon(   board, x, y, player) >= 5 ||
    UpperRight(board, x, y, player) >= 5 ||
    DownRight( board, x, y, player) >= 5 
    )? player: undefined;
}
