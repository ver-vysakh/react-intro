export default function(state = [], action) {
  let newState;
  switch (action.type) {
    case "SAVE_USER":
      console.log("SAVE_USER");
      newState = [...state, Object.assign({}, action.userDetails)];
      return newState;
    case "EDIT_USER":
      console.log("EDIT_USER");
      newState = [...state];
      let index = newState.find(item=>{ return item.index === action.userDetails.index});
      newState[index.index]= action.userDetails;
      return newState;
  }
  return state;
}
