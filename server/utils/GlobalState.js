import React, { createContext, useContext } from "react";
// Imported functions:
// createContext: instantiates a new Context object. Create the container to hold our global state data and functionality so we can provide it throughout our app.
// useContext: React Hook that will allow us to use the state created from the createContext function.
import { useProductReducer } from "../../client/src/utils/reducers";

const StoreContext = createContext();
const { Provider } = StoreContext;

// When we run createContext() it creates a new Context object.
// Every Context object comes with two components - Provider and Consumer.

// Instantiate initial global statue with useProductReducer() function.
const StoreProvider = ({ value = [], ...props }) => {
  // Every time we run useProductReducer() we receive two items in return: state (most up-to-date version of global state object) and dispatch (method we execute to update our state - specifically looking for an action object passed as its argument.)
  const [state, dispatch] = useProductReducer({
    products: [],
    categories: [],
    currentCategory: "",
  });
  // Use this to confirm it works!
  console.log(state);
  // Return StoreContext's Provider with state object and dispatch the function provided as data for the value prop.
  return <Provider value={[state, dispatch]} {...props} />;
};

// Custom function using the useContext hook to be used by the components that actually need the data our StoreProvider provides.

// Custome React Hook - when execute, will receive [state, dispatch] data managed for us.
const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
