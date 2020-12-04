import React, {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom'

import './App.css';

import MainContainer from "./containers/maincontainer"
import SecondaryContainer from "./containers/secondarycontainer"

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact path="/"
          name="main"
          render={props => <MainContainer {...props}/>}
        />
        <Route
          exact path="/secondary"
          name="secondary"
          render={props => <SecondaryContainer {...props}/>}
        />        
      </Switch>
    </BrowserRouter>
  );
}

export default App;
