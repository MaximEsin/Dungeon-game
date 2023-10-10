import { combineReducers } from "redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    sessionStorage.setItem("state", serializedState);
  } catch (err) {
    console.log(err);
  }
};

const loadState = () => {
  try {
    const serializedState = sessionStorage.getItem("state");
    if (!serializedState) return undefined;
    else return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

const persistedStore = loadState();

const initialState = {
  stats: {
    health: 0,
    damage: 0,
    money: 0,
  },
  event: {
    main: "You are standing in front of a dungeon where as some say a great treasure is hidden. You are a brave...",
    option1:
      "Wizard who uses mighty spells to atack your opponents. You have low health, but insane damage.",
    option2:
      "Warrior who uses sword to slay your opponents and a shield to protect yourself. You have high health, but low damage.",
    option3:
      "Rogue who uses filthy tricks and poisoned daggers to assassinate your opponents. You have average health and average damage.",
  },
};

export const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  dataReducer,
});

const store = createStore(
  rootReducer,
  persistedStore,
  composeWithDevTools(applyMiddleware(thunk))
);

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
