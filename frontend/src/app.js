import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import LandingPage from './landing-page/landing-page';
import HomePage from './home-page/home-page';
import Peer from 'peerjs';
import config from './local/config';

class App extends React.Component {
  constructor() 
  {
    super();
    this.peer = new Peer(null, {
      host: config.peer_host,
      port: config.peer_port,
      path: config.peer_path,
    });

    this.test_action = this.test_action.bind(this)
  }

  state =
  {
    test: "BLAH BLAH BLAH",
    
  }

  home_props =
    {
        test: this.test_action.bind(this)
    } 

  componentDidMount()
  {
    this.peer.on('open', (id) => {
      this.setState({
        this_peer_id: id
      });
    });
  }

  test_action()
  {
    console.log(this.state.test)
  }

  

  render(){
    return(
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LandingPage}/>
          <Route path="/home" component={() => <HomePage {...this.home_props}></HomePage>}/>
        </Switch>
      </BrowserRouter>
    </div>
    )
  }

}

export default App;
