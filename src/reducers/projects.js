export const projectsReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_PROJECT":
      return [...action.payload];
    case "CLEAR_PROJECT":
      return [...action.payload];
    case "EDIT_PROJECT":
      return [...action.payload];

    default:
      return state;
  }
};
