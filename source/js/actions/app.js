export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const SAVE_NUMBER = 'SAVE_NUMBER';

export function increment() {
  return {
    type: INCREMENT,
  };
}

export function decrement() {
  return {
    type: DECREMENT,
  };
}
