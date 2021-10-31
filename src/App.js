import Navbar from "./Components/Layouts/Navbar";
import {
  About,
  Contact,
  ErrorPage,
  Home,
  Login,
  Logout,
  Signup,
} from "./Pages";
import { Route, Switch } from "react-router-dom";
import { createContext, useReducer } from "react";
import { initialState, reducer } from "./reducer/UseReducer";



// ! 1.Copntext API
export const UserContext = createContext();

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
      <Route path="/logout">
        <Logout />
      </Route>
      <Route>
        <ErrorPage />
      </Route>
    </Switch>
  );
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <>
      <UserContext.Provider value={{state, dispatch}} >
        <Navbar />
        <Routes />
      </UserContext.Provider>
    </>
  );
}

export default App;
