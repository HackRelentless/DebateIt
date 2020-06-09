import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import LandingPage from './landing-page/landing-page';
import HomePage from './home-page/home-page';

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

