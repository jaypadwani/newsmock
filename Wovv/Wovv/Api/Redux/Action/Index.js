export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';
export const ADDITION = 'ADDITION';
export function increaseCount() {
  return ({ type: INCREMENT});
}

export function decreaseCount() {
  return ({ type: DECREMENT});
}

export function resetCount() {
  return ({ type: RESET});
}

export function addition() {
    return ({ type: ADDITION});
  };