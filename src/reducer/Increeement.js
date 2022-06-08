
const intialState=0;
const newNumber = (state=intialState, action) => {
 switch (action.type) {
     case "increment": return state +2;
     case "decrement": return state -2;
     default:return state;
 }
}
export default newNumber;