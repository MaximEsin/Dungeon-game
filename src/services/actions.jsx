export function triggerEvent(number, counter) {
  return function (dispatch) {
    dispatch({
      type: "TRIGGER_EVENT",
      number: number,
      counter: counter,
    });
  };
}

export function restartGame() {
  return function (dispatch) {
    dispatch({
      type: "RESTART_GAME",
    });
  };
}
