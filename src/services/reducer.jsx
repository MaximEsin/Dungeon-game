import { combineReducers } from "redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { data } from "../data/data";
import warrior from "../images/Warior.png";
import wizzard from "../images/Wizzard.png";
import rogue from "../images/Rouge.png";
import map from "../images/map.png";

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
    health: 1,
    damage: 0,
    coins: 0,
  },
  event: {
    main: "You are standing in front of a dungeon where as some say a great treasure is hidden. You are a brave...",
    mainImg: map,
    option1:
      "Wizard who uses mighty spells to atack your opponents. You have low health, but insane damage.",
    img1: wizzard,
    option2:
      "Warrior who uses sword to slay your opponents and a shield to protect yourself. You have high health, but low damage.",
    img2: warrior,
    option3:
      "Rogue who uses filthy tricks and poisoned daggers to assassinate your opponents. You have average health and average damage.",
    img3: rogue,
  },
  counter: 0,
};

export const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TRIGGER_EVENT": {
      const event = data[action.counter];
      if (event[action.number - 1].death) {
        return {
          ...state,
          stats: {
            health: 0,
          },
        };
      }

      return {
        ...state,
        stats: {
          health: state.stats.health + event[action.number - 1].health,
          damage: state.stats.damage + event[action.number - 1].damage,
          coins: state.stats.coins + event[action.number - 1].coins,
        },
        event: {
          main: event[action.number - 1].main,
          mainImg: event[action.number - 1].mainImg,
          option1: event[action.number - 1].option1,
          img1: event[action.number - 1].img1,
          option2: event[action.number - 1].option2,
          img2: event[action.number - 1].img2,
          option3: event[action.number - 1].option3,
          img3: event[action.number - 1].img3,
        },
        counter: state.counter + 1,
      };
    }
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
