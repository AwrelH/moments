import css from "./styles/App.module.css";

import NavBar from "./components/NavBar";
import { Container } from "react-bootstrap";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className={css.App}>
      <NavBar />
      <Container className={css.Main}>
        <Switch>
          <Route exact path="/" render={() => <h1>Home Page</h1>} />

          <Route exact path="/signin" render={() => <h1>Sign in</h1>} />

          <Route exact path="/signup" render={() => <h1>Sign up</h1>} />
          <Route render={() => <h1>Page not found!</h1>} />
        </Switch>
      
      </Container>
    </div>
  );
}

export default App;
