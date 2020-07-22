import React, { Component } from 'react'

import QueryMeter from 'react-query-meter'
import 'react-query-meter/dist/index.css'

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isStrengthMode: true,
            totalHits: 0,
            maxHits: 0,
            width: 200,
            thickness: 20,
            slices: 8, 
            slicesGap: 3,
            duration: 1000,
            transitionTiming: "cubic-bezier(.17,.67,.83,.67)",
            backgroundColor: "#5b6b96",
            fillColor: "linear-gradient(315deg, #e79087 0%, #fcd181 74%)",
            fillBackgroundColor: "#eee",
            containerSpacing: 20,
            showInfo: true,
            showPercentage: true
        };
    }

    randomizeResults(_this) {
        let maxHits = Math.floor(Math.random() * 10001);
        let totalHits = Math.floor(Math.random() * maxHits);
        _this.setState({ totalHits, maxHits });
    }

    render() {
        const { 
            totalHits, 
            maxHits, 
            isStrengthMode, 
            width, 
            thickness, 
            slices, 
            slicesGap,
            duration,
            transitionTiming,
            backgroundColor,
            fillColor,
            fillBackgroundColor,
            containerSpacing,
            showInfo,
            showPercentage
        } = this.state;
    
        return (
            <div style={{display: 'block', width: '100%', textAlign: 'center'}}>
                <div style={{ minWidth: 280, display: 'inline-flex', flexDirection: 'column', textAlign: 'left', padding: 20, borderRadius: 8, boxShadow: 'rgb(0 0 0 / 0.3) 1px 2px 3px 3px', backgroundColor: '#8d5185', backgroundImage: 'linear-gradient(315deg, #493f61 0%, #7892d8 74%)' }}>
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                        <QueryMeter
                            totalHits={totalHits}
                            maxHits={maxHits}
                            width={width}
                            thickness={thickness}
                            slices={slices}
                            sliceGap={slicesGap}
                            duration={duration}
                            transitionTiming={transitionTiming}
                            backgroundColor={backgroundColor || "#fff"}
                            fillColor={fillColor}
                            fillBackgroundColor={fillBackgroundColor}
                            containerSpacing={containerSpacing}
                            strengthMode={isStrengthMode}
                            showInfo={showInfo}
                            showPercentage={showPercentage}
                            topText="Total Hits:&nbsp;"
                            bottomText="Max Hits:&nbsp;"
                            percentageStyle={{color: '#fff'}}
                            infoNumbersStyle={{color: '#fff'}}
                            infoTextStyle={{color: '#fff'}}
                        />
                    </div>
                    <button style={{display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(316deg, #f94327 0%, #ff7d14 74%)', fontSize: 12, margin: '20px auto', border: '5px solid #fff', cursor: 'pointer', padding: 10, outline: 'none', width: 70, height: 70, borderRadius: '50%', boxShadow: '-2px 6px 6px 1px rgb(0 0 0 / 0.3)'}} onClick={e => this.randomizeResults(this)}><svg id="Capa_1" enable-background="new 0 0 512 512" height="35" viewBox="0 0 512 512" width="35" xmlns="http://www.w3.org/2000/svg"><g><circle cx="362" cy="150" r="15"/><circle cx="304.068" cy="92.068" r="15"/><circle cx="419.926" cy="207.926" r="15"/><path d="m467 0h-210c-24.813 0-45 20.187-45 45v83.993c-5.748-2.6-12.031-3.979-18.529-3.979-12.02 0-23.321 4.681-31.82 13.181l-148.492 148.493c-17.544 17.546-17.544 46.094 0 63.64l148.493 148.492c8.499 8.5 19.8 13.181 31.82 13.181s23.32-4.681 31.819-13.181l148.493-148.492c13.584-13.586 16.642-33.764 9.189-50.327h84.027c24.813 0 45-20.187 45-45v-210.001c0-24.813-20.187-45-45-45zm-114.43 329.114-148.492 148.492c-2.833 2.833-6.6 4.394-10.606 4.394-4.007 0-7.773-1.561-10.607-4.394l-148.493-148.492c-5.849-5.849-5.849-15.365 0-21.214l148.493-148.492c2.833-2.833 6.6-4.394 10.607-4.394 4.006 0 7.773 1.561 10.606 4.394l148.492 148.492c5.849 5.849 5.849 15.366 0 21.214zm129.43-74.114c0 8.271-6.729 15-15 15h-109.904l-115.096-115.095v-109.905c0-8.271 6.729-15 15-15h210c8.271 0 15 6.729 15 15z"/><circle cx="204.078" cy="244.261" r="15"/><circle cx="119.225" cy="329.114" r="15"/><circle cx="161.651" cy="286.688" r="15"/><circle cx="267.717" cy="307.901" r="15"/><circle cx="182.864" cy="392.754" r="15"/><circle cx="225.291" cy="350.327" r="15"/></g></svg></button>
                    <div style={{display: 'flex', flexDirection: 'column', fontSize: 14}}>
                        <div style={{display: 'flex', alignItems: 'center'}}>
                            <input name="strengthMode" type="checkbox" checked={isStrengthMode} onChange={e => this.setState({isStrengthMode: !isStrengthMode})} />
                            <label htmlFor="strengthMode">&nbsp;&nbsp;Strength Mode</label>
                        </div>
                        <div style={{display: 'flex', alignItems: 'center'}}>
                            <input name="showInfo" type="checkbox" checked={showInfo} onChange={e => this.setState({showInfo: !showInfo})} />
                            <label htmlFor="showInfo">&nbsp;&nbsp;Show-Info</label>
                        </div>
                        <div style={{display: 'flex', alignItems: 'center'}}>
                            <input name="showPercentage" type="checkbox" checked={showPercentage} onChange={e => this.setState({showPercentage: !showPercentage})} />
                            <label htmlFor="showPercentage">&nbsp;&nbsp;Show-Percentage</label>
                        </div>
                        <br />
                        <label htmlFor="width">Width</label>
                        <input name="width" type="number" value={width} onChange={e => this.setState({width: e.target.value * 1})} />
                        <label htmlFor="thickness">Thickness</label>
                        <input name="thickness" type="number" value={thickness} onChange={e => this.setState({thickness: e.target.value * 1})} />
                        <label htmlFor="slices">Slices</label>
                        <input name="slices" type="number" value={slices} onChange={e => this.setState({slices: e.target.value * 1})} />
                        <label htmlFor="slicesGap">Slices-Gap</label>
                        <input name="slicesGap" type="number" value={slicesGap} onChange={e => this.setState({slicesGap: e.target.value * 1})} />
                        <label htmlFor="duration">Duration</label>
                        <input name="duration" type="number" value={duration} onChange={e => this.setState({duration: e.target.value * 1})} />
                        <label htmlFor="transitionTiming">Transition-Timing</label>
                        <input name="transitionTiming" type="text" value={transitionTiming} onChange={e => this.setState({transitionTiming: e.target.value})} />
                        <label htmlFor="backgroundColor">Background-Color</label>
                        <input name="backgroundColor" type="text" value={backgroundColor} onChange={e => this.setState({backgroundColor: e.target.value})} />
                        <label htmlFor="fillColor">Fill-Color</label>
                        <input name="fillColor" type="text" value={fillColor} onChange={e => this.setState({fillColor: e.target.value})} />
                        <label htmlFor="fillBackgroundColor">Fill-Background-Color</label>
                        <input name="fillBackgroundColor" type="text" value={fillBackgroundColor} onChange={e => this.setState({fillBackgroundColor: e.target.value})} />
                        <label htmlFor="containerSpacing">Container-Spacing</label>
                        <input name="containerSpacing" disabled={!showPercentage} type="number" value={showPercentage ? containerSpacing : 0} onChange={e => this.setState({containerSpacing: e.target.value * 1})} />
                    </div>
                </div>
            </div>
        );
    }
}

export default App