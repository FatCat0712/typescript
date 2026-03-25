import { useReducer } from "react";

type State = {
  count: number;
};

type Action =
  | {
      type: "increment";
    }
  | {
      type: "decrement";
    }
  | {
      type: "reset";
      payload: number;
    };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        count: state.count + 1,
      };
    case "decrement":
      return {
        ...state,
        count: state.count - 1,
      };
    case "reset":
      return {
        ...state,
        count: action.payload,
      };
    default:
      return state;
  }
};

const CounterReducer = () => {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
  });
  return (
    <>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "reset", payload: 0 })}>
        Reset
      </button>
    </>
  );
};

export default CounterReducer;
