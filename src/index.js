import React, { Component } from 'react'

class QueryMeter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      degrees: 0,
      percentage: 0,
      roundedPercentage: 0,
      maxHits: 0,
      totalHits: 0,
      style: this.getStyles(this.props)
    };
  }
  
  getStyles(props) {
    let styles = {
      container: {
        overflow: "hidden",
        padding: props.showPercentage ? props.containerSpacing : 0,
        display: "inline-flex",
        flexDirection: "column",
        position: "relative",
        background: props.backgroundColor,
        borderRadius: `${props.width * 2}px ${props.width * 2}px 0 0`,
        minHeight: !props.showPercentage ? `${props.width / 2}px` : `${(props.width / 2) + (props.containerSpacing * 2)}px`,
        maxHeight: !props.showPercentage ? `${props.width / 2}px` : `${(props.width / 2) + (props.containerSpacing * 2)}px`
      },
      wrapper: {
        width: props.width,
        minHeight: props.width / 2,
        maxHeight: props.width / 2,
        position: "relative",
        borderRadius: `${props.width * 2}px ${props.width * 2}px 0 0`
      },
      bottomLayer: {
        position: "absolute",
        top: 0,
        left: 0,
        background: props.fillBackgroundColor,
        borderRadius: `${props.width * 2}px ${props.width * 2}px 0 0`,
        width: props.width,
        height: props.width / 2,
        zIndex: 1
      },
      colorLayer: {
        position: "absolute",
        top: props.width / 2,
        left: 0,
        background: props.fillColor,
        borderRadius: `0 0 ${props.width * 2}px ${props.width * 2}px`,
        width: props.width,
        height: props.width / 2,
        zIndex: 2,
        transformOrigin: "50% 0%",
        transitionTimingFunction: props.transitionTiming,
        transitionProperty: "all",
        transitionDuration: `${props.duration}ms`
      },
      coverLayer: {
        position: "absolute",
        bottom: 0,
        left: "50%",
        background: props.backgroundColor,
        borderRadius: `${props.width * 2}px ${props.width * 2}px 0 0`,
        width: props.width - props.thickness * 2,
        height: props.width / 2 - props.thickness,
        transform: "translate(-50%, 0)",
        zIndex: 4
      },
      bottomCoverLayer: {
        height: props.containerSpacing,
        background: props.backgroundColor,
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        margin: `0 ${props.containerSpacing}px`,
        zIndex: 2,
        display: props.showPercentage ? "block" : "none"
      },
      seperator: {
        position: "absolute",
        bottom: 0,
        left: "-2px",
        width: 2 + props.width / 2,
        height: props.sliceGap,
        zIndex: 3,
        overflow: "hidden",
        transformOrigin: "100% 50% 0px",
        background: props.backgroundColor
      },
      percentage: {
        transform: "rotate(-90deg)",
        position: "absolute",
        top: 0,
        width: 40,
        left: -36,
        fontSize: 12,
        textAlign: "center",
        transformOrigin: "50% 0% 0px",
        cursor: "default"
      },
      detailsContainer: {
        flex: 1,
        height: "100%",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        fontSize: 12,
        paddingTop: 7
      },
      labelText: {
        fontSize: 13,
        color: "#4e4e4e"
      },
      labelNumber: {
        fontWeight: 800,
        fontSize: 13,
        color: "#4e4e4e"
      }
    };

    return styles;
  }

  refresh(props) {
    if (this.isUnmounted) return;
    let style = this.getStyles(props);
    let maxHits = props.maxHits;
    let strengthMode = props.strengthMode;
    let totalHits = props.totalHits || 0;
    let percentage =
      totalHits === 1
        ? 100
        : totalHits === 0
        ? 0
        : strengthMode
        ? 100 - (totalHits / maxHits) * 100
        : (totalHits / maxHits) * 100;
    if (percentage < 0 || !percentage) percentage = 0;
    let roundedPercentage = Math.floor(percentage);
    if (props.getPercentage) props.getPercentage(roundedPercentage);
    let degrees = (180 * roundedPercentage) / 100;

    this.setState({
      percentage,
      roundedPercentage,
      degrees,
      maxHits,
      totalHits,
      style
    });
  }

  componentDidMount() {
    let arrayOfnumbersToAnimate = this.getInfoData();
    arrayOfnumbersToAnimate = arrayOfnumbersToAnimate.concat(this.getPercentageData());
    this.triggerAnimation(arrayOfnumbersToAnimate);
  }

  getInfoData() {
    let infoData = [];
    infoData.push(
      {
        element: this.refs.totalHits,
        state: "totalHits",
        previous: 0,
        current: 0
      },
      {
        element: this.refs.maxHits,
        state: "maxHits",
        previous: 0,
        current: 0
      }
    );
    return infoData;
  }

  getPercentageData() {
    let percentageData = [];
    percentageData.push({
      element: this.refs.percentage,
      state: "percentage",
      previous: 0,
      current: 0
    });
    return percentageData;
  }
  
  triggerAnimation(arrayOfnumbersToAnimate) {
    this.initElementsOfNumbers(arrayOfnumbersToAnimate);
    this.refresh(this.props);
    this.animateNumbers(arrayOfnumbersToAnimate);
  }

  shouldComponentUpdate(nextProps, nextState) {
    let conditionalProps = ["topText", "bottomText"];
    for (let i = 0; i < conditionalProps.length; i++) {
      if (this.props[conditionalProps[i]] !== nextProps[conditionalProps[i]])
        return true;
    }

    let conditionalState = ["maxHits", "totalHits", "degrees"];
    for (let i = 0; i < conditionalState.length; i++) {
      if (nextProps[conditionalState[i]] !== nextState[conditionalState[i]])
        return true;
    }
    return false;
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      if(prevProps.showInfo !== this.props.showInfo) this.triggerAnimation(this.getInfoData());
      if(prevProps.showPercentage !== this.props.showPercentage) this.triggerAnimation(this.getPercentageData());
      this.refresh(this.props);
    }
  }

  componentWillUnmount() {
    this.isUnmounted = true;
  }

  initElementsOfNumbers(arrayOfnumbersToAnimate) {
    // initialize the objects to animate
    arrayOfnumbersToAnimate.forEach(obj => {
      if(!obj.element) return;
      obj.element.innerHTML = obj.current.toLocaleString();
      obj.next = this.state[obj.state];
      obj.startTime = Date.now();
    });
  }

  animateNumbers(array) {
    var myReq;
    var progress = Date.now();
    let step = (timestamp) => {
      array.forEach(obj => {
        if(!obj.element) return;
        // the target has changed
        if (obj.next !== this.state[obj.state]) {
          // the new target is the same as the previous origin
          if (obj.previous === this.state[obj.state]) {
            // calculate and use the time that passed (to mimic the way "transform" works)
            var span = obj.next - obj.previous; // the total range
            var position = span ? (obj.next - obj.current || span) / span : 0; // the fraction of the progress
            obj.startTime = Date.now() - this.props.duration * position;

            obj.previous = obj.next;
            obj.next = this.state[obj.state];
          }

          // the new target is different than the previous origin,
          else {
            // use the current duration
            obj.startTime = Date.now();

            obj.previous = obj.current;
            obj.next = this.state[obj.state];
          }
        }

        // the target has not changed
        if (obj.current == obj.next) {
          // reset variables and return
          obj.startTime = Date.now();
          obj.previous = obj.next;
          return;
        }

        // calculate the current value
        var timespan = Date.now() - obj.startTime; // the time that passed
        var positionInTime = Math.min(
          timespan / (this.props.duration || timespan),
          1
        ); // the fraction of the progress in time units
        var progress = (obj.next - obj.previous) * positionInTime; // the progress
        obj.current = obj.previous + progress; // the current value
        obj.element.innerHTML = Math.round(obj.current).toLocaleString();
      });

      myReq = window.requestAnimationFrame(step);
    };
    myReq = window.requestAnimationFrame(step);
  }

  renderSlices() {
    let arrayOfSlices = [];

    for (let i = 1; i < this.props.slices; i++) {
      arrayOfSlices.push(
        <div
          key={i}
          style={{
            ...this.state.style.seperator,
            transform: `rotate(${(180 / this.props.slices) * i}deg)`
          }}
        />
      );
    }

    return arrayOfSlices;
  }

  renderPercentage() {
    if (!this.props.showPercentage) return;
    return (
      <div
        data-auto="percentage"
        style={{
          ...this.state.style.percentage,
          ...this.props.percentageStyle
        }}
        title={this.state.percentage + "%"}
      >
        <span ref="percentage" />%
      </div>
    );
  }

  renderInfo() {
    if (!this.props.showInfo) return;
    return (
        <div style={{
          ...this.state.style.detailsContainer,
          ...this.props.infoContainerStyle
        }}>
            <div style={{ display: "flex", alignItems: "baseline" }}>
                <span
                    data-auto="selected-entity-type"
                    style={{
                    ...this.state.style.labelText,
                    ...this.props.infoTextStyle,
                    textAlign: "center"
                    }}
                >
                    {this.props.topText}
                </span>
                <span
                    data-auto="hits"
                    ref="totalHits"
                    style={{
                    ...this.state.style.labelNumber,
                    ...this.props.infoNumbersStyle
                    }}
                />
                </div>
                <div style={{ display: "flex", alignItems: "baseline" }}>
                <span
                    style={{
                    ...this.state.style.labelText,
                    ...this.props.infoTextStyle
                    }}
                >
                    {this.props.bottomText}
                </span>
                <span
                    data-auto="all-from-type"
                    ref="maxHits"
                    style={{
                    ...this.state.style.labelNumber,
                    ...this.props.infoNumbersStyle
                    }}
                />
                </div>
            </div>
        );
    }

    render() {
      let { style } = this.props;

      return (
        <div style={{...this.state.style.container, ...style}}>
            <div style={this.state.style.wrapper}>
              <div style={this.state.style.bottomLayer}></div>
              <div
                  style={{
                  ...this.state.style.colorLayer,
                  transform: `rotate(${this.state.degrees}deg)`
                  }}
              >
                  {this.renderPercentage()}
              </div>
              <div style={this.state.style.coverLayer}>{this.renderInfo()}</div>
                  <div>{this.renderSlices()}</div>
              </div>
            <div style={this.state.style.bottomCoverLayer}></div>
        </div>
      );
    }
}

QueryMeter.defaultProps = {
  width: 200,
  thickness: 25,
  slices: 6,
  sliceGap: 2,
  duration: 1000,
  transitionTimingFunction: "ease-in-out",
  backgroundColor: "#fff",
  fillColor:
    "radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)",
  fillBackgroundColor: "#eee",
  containerSpacing: 20,
  strengthMode: true,
  style: {},
  percentageStyle: {},
  infoNumbersStyle: {},
  infoTextStyle: {},
  showInfo: true,
  showPercentage: true,
  topText: "Total Hits: ",
  bottomText: "Max Hits: ",
  firstAnimationDelay: 0,
  totalHits: 400,
  maxHits: 1000
};

export default QueryMeter;