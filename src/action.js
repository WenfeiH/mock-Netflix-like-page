export const getAllData = () => dispatch => {
  return fetch("./mockData.json")
    .then(res => res.json())
    .then(res => dispatch({ type: "FETCH_MOCK_DATA", lists: res }));
};
