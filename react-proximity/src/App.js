//import logo from './logo.svg';
import React, {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom'
import './App.css';
import MainContainer from './containers/maincontainer/';
import SecondaryContainer from './containers/secondarycontainer/';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact path="/"
          name="Home"
          render={props => <MainContainer {...props}/>}
        />
        <Route
          exact path="/secondary"
          name="Secondary"
          render={props => <SecondaryContainer {...props}/>}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
