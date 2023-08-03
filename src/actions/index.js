export const ADD = 'ADD';
export const SUBTRACT = 'SUBTRACT';
export const MULTIPLY = 'MULTIPLY';
export const DIVIDE = 'DIVIDE';
export const RESET = 'RESET';

export const add = (operand1, operand2) => ({
  type: ADD,
  payload: { operand1, operand2 },
});

export const subtract = (operand1, operand2) => ({
  type: SUBTRACT,
  payload: { operand1, operand2 },
});

export const multiply = (operand1, operand2) => ({
  type: MULTIPLY,
  payload: { operand1, operand2 },
});

export const divide = (operand1, operand2) => ({
  type: DIVIDE,
  payload: { operand1, operand2 },
});

export const reset = (operand1, operand2) => ({
    type: RESET,
});