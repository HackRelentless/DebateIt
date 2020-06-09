import React from 'react';
import './landing.css';

class LandingPage extends React.Component {
  blue = {r: 49, g: 66, b: 156};
  red = {r: 255, g: 32, b: 32};
  pol = [
    "Far Left",
    "Left",
    "Left of Center",
    "Center",
    "Right of Center",
    "Right",
    "Far Right"
  ];

  state = {
    num: 50,
    color: this.calculateColorLerp(50),
    leaning: this.getPoliticalEnum(50)
  }

  /**
   * Calculates the interpolated value between blue and red based on percent
   * @param {number} percent - the value between blue(0) and red(100)
   */
  calculateColorLerp(percent) {
    percent = percent/100;
    let r = this.blue.r + ((this.red.r - this.blue.r) * percent);
    let g = this.blue.g + ((this.red.g - this.blue.g) * percent);
    let b = this.blue.b + ((this.red.b - this.blue.b) * percent);
    return `rgb(${r}, ${g}, ${b})`
  }

  /**
   * Converts the slider number from 1-100 into text based on evenly set, calulated ranges
   * This text is based on the pol array
   * @param {number} percent - percentage of the slider.
   */
  getPoliticalEnum(percent) {
    let range = 100/this.pol.length;
    let halved = range/2;
    let skewed = percent + halved;
    return this.pol[Math.round(skewed/range)-1];
  }

  /**
   * 2 Way binding function for handling any changes in the range input
   */
  handleChange = (e) =>{
    this.setState({
      num: e.target.value,
      color: this.calculateColorLerp(parseInt(e.target.value)),
      leaning: this.getPoliticalEnum(parseInt(e.target.value))
    })
  }

  /**
   * Renders the viewable HTML from JSX
   */
  render(){
    return(
    <div style={{backgroundColor: this.state.color}} className="App App-header">
      <div>
        <h1>What is your political leaning?</h1>
        <input type="range" class="form-control-range" onChange={this.handleChange} value={this.state.num} />
        <h1>{this.state.leaning}</h1>
      </div>
    </div>
    )
  }

}

export default LandingPage;
