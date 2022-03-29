import React, { createContext, useContext } from "react";
// CreateContext used to instantiates Context object, basically container to hold the global state data and functionality so we can provide it throughout app.
// useContext is a Hook that allows to use the state created from the createContext function.
import { useProductReducer } from "./reducers";

// Instantiates the global state oject.
const StoreContext = createContext();
const { Provider } = StoreContext;

// Instantiates global state with useProductReducer() function created earlier.
// Every time we run, we receive state (most up-to-date version of global state object) and dispatch (method execute to update our state)
// Value opens up to pass in more data for state if we need to.
const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useProductReducer({
    products: [],
    categories: [],
    currentCategory: "",
  });
  // use this to confirm it works!
  console.log(state);

  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
