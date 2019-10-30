export default function(state = [], action) {
  let newState;
  switch (action.type) {
    case "EDIT_USER":
        console.log("EDIT_USER");
        newState = [...state];
        let index = newState.find(item=>{ return item.index === action.userDetails.index});
        newState[index.index]= action.userDetails;
        return newState;
  }
  return state;
}
 