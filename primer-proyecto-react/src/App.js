import './App.css';
import React,{BrowserRouter, Switch, Route} from 'react-router-dom';
import MainContainer from "./containers/maincontainer";
import SecondaryContainer from './containers/secondarycontainer';
import PokemonContainer from './containers/pokemoncontainer';
import PokemonClassContainer from './containers/pokemonclasscontainer';

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
        <Route
          exact path="/pokemon"
          name="Pokemon container"
          render={props => <PokemonContainer {...props}/>}
        />
        <Route
          exact path="/pokemonclass"
          name="Pokemon Class container"
          render={props => <PokemonClassContainer {...props}/>}
        />
      </Switch>      
    </BrowserRouter>
  );
}

export default App;
