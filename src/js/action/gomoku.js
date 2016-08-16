export const PUT = 'PUT';

export function put(x, y){

  return (dispatch, getState) => {
    return dispatch({
      type: PUT,
      x: x,
      y: y,
    })
  }
}
