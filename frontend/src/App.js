import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import LandingPage from './containers/LandingPage/index';
import HomePage from './containers/HomePage/index';

class App extends React.Component {
  render(){
    return(
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LandingPage}/>
          <Route path="/home" component={HomePage}/>
        </Switch>
      </BrowserRouter>
    </div>
    )
  }

}

export default App;

