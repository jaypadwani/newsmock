import {INCREMENT, DECREMENT, RESET,ADDITION} from '../Action/Index'

const INITIAL_STATE = {
  count: 0,
//   firstNumber=0,
//   secondNumber=0,
}

function handleChange(state, change) {
  const {count} = state;
  return ({
    count: count + change,
    
  })
}

export default function reducer(state = INITIAL_STATE, action) {
  const {count} = state;
  switch(action.type) {
    case INCREMENT:
      return handleChange(state, 1);
    case DECREMENT:
      return handleChange(state, -1);
      case ADDITION:
        return handleChange(firstNumber+secondNumber);
    case RESET:
      return (INITIAL_STATE)
    default:
      return state;
  }
}