// reducer is a functin that is going to receive a state and a action and is going  to return a NEW STATE
//[] state is nitialized as an empty array
export default function courseReducer(state = [], action) {
  switch (action.type) {
    case "CREATE_COURSE":
      
      return [...state, { ...action.course }]; // whatever is returned from the reducer becomes the new state
    default:
        return state;  // default to return , always use the state that is passed
  }
}
