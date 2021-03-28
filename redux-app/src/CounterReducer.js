import { increment, decrement, reset } from './Action';

const initialState = {
  counter: 0,
};

const CounterReducer = (state = initialState, action) => {
  switch (action.type) {
    /*  case 'INCREMENT': */
    case increment:
      return { ...state, counter: state.counter + action.payload.value };
    case decrement:
      return { ...state, counter: state.counter - action.payload.value };
    case reset:
      return { ...initialState };
    default:
      return state;
  }
};

export default CounterReducer;
