import { reducer } from "../utils/reducers";

// import our actions
import {
  UPDATE_PRODUCTS,
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
} from "../utils/actions";

// create a sample of what our global state will look like
const initialState = {
  products: [],
  categories: [{ name: "Food" }],
  currentCategory: "1",
};

// Createing a new state object.
// Result of what comes from a function that we haven't created yet, called reducer().
// Accepts two parameters: 1. Current state object so we can make copy, and 2. action we're performing to update state, broken into two parts: type/value.
// Type = type of action performting, value = representative of new data we want to use with the action.
test("UPDATE_PRODUCTS", () => {
  let newState = reducer(initialState, {
    type: UPDATE_PRODUCTS,
    products: [{}, {}],
  });

  expect(newState.products.length).toBe(2);
  expect(initialState.products.length).toBe(0);
});

// Test how we can update the categories array.
// Execute reducer function and pass initialState, but action/value has changed.
// Update category list to be new array of categories.
test("UPDATE_CATEGORIES", () => {
  let newState = reducer(initialState, {
    type: UPDATE_CATEGORIES,
    categories: [{}, {}],
  });

  // Result of reducer() should show length of updated categories array will be 2, while initial cateogries array should still be 1.
  expect(newState.categories.length).toBe(2);
  expect(initialState.categories.length).toBe(1);
});

// Updating state of currentCategory to new string instead of array - compare values between newState and initialState to confirm initialState has remained the same.
test("UPDATE_CURRENT_CATEGORY", () => {
  let newState = reducer(initialState, {
    type: UPDATE_CURRENT_CATEGORY,
    currentCategory: "2",
  });

  expect(newState.currentCategory).toBe("2");
  expect(initialState.currentCategory).toBe("1");
});
