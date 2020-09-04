//Action creater

export const increment = 'INCREMENT';
export const decrement = 'DECREMENT';
export const reset = 'RESET';

export const incrementAction = () => ({ type: increment, payload: { value: 5 } });
export const decrementAction = () => ({ type: decrement, payload: { value: 5 } });
export const resetAction = () => ({ type: reset });
