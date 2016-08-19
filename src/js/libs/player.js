export function ChangePlayer(player, player1, player2){
  return (player === player1) ? player2 : player1
}

export function GetPlayer(player, players){
  return players[player]
}
