import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
  return (
        <div className="App App-header">
            <p>
              What is your political leaning? 
              <input type="range" class="form-control-range"></input>
            </p>
        </div>
      );
  }
}

export default App;

