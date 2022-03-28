// DEFINING HOW THREE PARTS OF OUR STATE WILL BE MAINTAINED AND UPDATED.
export const UPDATE_PRODUCTS = "UPDATE_PRODUCTS";
// Used by ProductList component.
// End goal is to store the data retrieved for products by Apollo in this global state - will allow for offline capabilities.
export const UPDATE_CATEGORIES = "UPDATE_CATEGORIES";
// Want to take the list of categories retrieved from the server by Apollo and store it in this global state - will allow to easily add offline capabilities.
export const UPDATE_CURRENT_CATEGORY = "UPDATE_CURRENT_CATEGORY";
// Connecting piece of data for the previous two actions - want to be able to select a category from the state created by the Update_Cat action and display products for that category from the list we create from the Update_Pro action.
