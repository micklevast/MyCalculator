import { ADD, SUBTRACT, MULTIPLY, DIVIDE,RESET } from '../actions';

const initialState = {
  result: 0,
};

const calculatorReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        result: action.payload.operand1 + action.payload.operand2,
      };
    case SUBTRACT:
      return {
        ...state,
        result: action.payload.operand1 - action.payload.operand2,
      };
    case MULTIPLY:
      return {
        ...state,
        result: action.payload.operand1 * action.payload.operand2,
      };
    case DIVIDE:
      return {
        ...state,
        result: action.payload.operand1 / action.payload.operand2,
      };
    case RESET:
        return{
            ...state,
            result:0
        }
    default:
      return state;
  }
};

export default calculatorReducer;
