import React, { Component } from 'react'

import QueryMeter from 'react-query-meter'
import 'react-query-meter/dist/index.css'

class App extends Component {

  constructor(props) {
      super(props);
      this.state = {
          isStrengthMode: true,
          totalHits: 0,
          maxHits: 0
      };
  }

  randomizeResults(_this) {
      let maxHits = Math.floor(Math.random() * 10001);
      let totalHits = Math.floor(Math.random() * maxHits);
      _this.setState({ totalHits, maxHits });
  }

  render() {
      const { totalHits, maxHits, isStrengthMode } = this.state;
  
      return (
          <div style={{ display: "inline-flex", flexDirection: "column" }}>
              <div style={{display: 'flex', alignItems: 'center', fontSize: 14}}>
                  <input name="strengthMode" type="checkbox" checked={isStrengthMode} onChange={e => this.setState({isStrengthMode: !isStrengthMode})} />
                  <label htmlFor="strengthMode">Strength Mode</label>
              </div>
              <QueryMeter
                  totalHits={totalHits}
                  maxHits={maxHits}
                  width={200}
                  thickness={25}
                  slices={6}
                  sliceGap={3}
                  duration={1000}
                  transitionTiming="cubic-bezier(.17,.67,.83,.67)"
                  coverBackgroundColor="#fff"
                  containerBackgroundColor="#fff"
                  fillColor="linear-gradient(315deg, #fff000 0%, #ed008c 74%)"
                  fillBackgroundColor="#eee"
                  containerSpacing={20}
                  strengthMode={isStrengthMode}
                  percentageStyle={{}}
                  infoNumbersStyle={{}}
                  infoTextStyle={{}}
                  showInfo={true}
                  showPercentage={true}
                  topText="Total Hits:&nbsp;"
                  bottomText="Max Hits:&nbsp;"
              />
              <button onClick={e => this.randomizeResults(this)}>RANDOMIZE</button>
          </div>
      );
  }
}

export default App