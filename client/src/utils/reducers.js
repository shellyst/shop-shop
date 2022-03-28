import { useReducer } from "react";

// Possible actions we can perform.
import {
  UPDATE_PRODUCTS,
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
} from "./actions";

// Creates a function called reducer.
// Pass value of action.type into switch statement, and compare to possible actions.
export const reducer = (state, action) => {
  switch (action.type) {
    // if action type value is the value of `UPDATE_PRODUCTS`, return a new state object with an updated products array - using spread operator and set the products key to a value of a new array with the action.products value spread across it.
    case UPDATE_PRODUCTS:
      return {
        ...state,
        products: [...action.products],
      };

    // if action type value is the value of `UPDATE_CATEGORIES`, return a new state object with an updated categories array
    case UPDATE_CATEGORIES:
      return {
        ...state,
        categories: [...action.categories],
      };

    case UPDATE_CURRENT_CATEGORY:
      return {
        ...state,
        currentCategory: action.currentCategory,
      };

    // if it's none of these actions, do not update state at all and keep things the same!
    // Make no changes - return as is.
    default:
      return state;
  }
};

// Will be used to help initialize our global state object and then provide us with the functionality for updating that state by automatically running it through our custom reducer() function. More in-depth way of using the useState() hook.

// userReducer() hook is meant specifically for managing greater level of state.
export function useProductReducer(initialState) {
  return useReducer(reducer, initialState);
}
