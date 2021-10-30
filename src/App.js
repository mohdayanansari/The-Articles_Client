import Navbar from "./Components/Layouts/Navbar";
import { About, Contact, ErrorPage, Home, Login, Signup } from "./Pages";
import { Link, Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />

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
        <Route>
         <ErrorPage />
        </Route>
      </Switch>
    </>
  );
}

export default App;
