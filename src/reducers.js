const reducers = (state = { mylist: [], recommendations: [] }, action) => {
  switch (action.type) {
    case "FETCH_MOCK_DATA":
      return { ...action.lists };
    case "REMOVE_FROM_LIST":
      return {
        mylist: state.mylist.filter(item => item.id !== action.item.id),
        recommendations: [...state.recommendations, action.item]
      };
    case "ADD_TO_MYLIST":
      return {
        mylist: [...state.mylist, action.item],
        recommendations: state.recommendations.filter(
          item => item.id !== action.item.id
        )
      };
    default:
      return state;
  }
};
export default reducers;
