# react-query-meter

A query result visual meter.

[![NPM](https://img.shields.io/npm/v/react-query-meter.svg)](https://www.npmjs.com/package/react-query-meter) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

![meter](https://user-images.githubusercontent.com/8030614/95019737-ca4b4880-066f-11eb-8513-6e8d4e1972d5.gif)

Live Demo [here](https://nadavshaar.github.io/react-query-meter/)

## Install

```bash
npm install --save react-query-meter
```

## Usage

```jsx
<QueryMeter
    totalHits={totalHits}
    maxHits={maxHits}
    width={200}
    thickness={25}
    slices={6}
    sliceGap={2}
    duration={1000}
    transitionTiming="cubic-bezier(.17,.67,.83,.67)"
    backgroundColor="#fff"
    fillColor="linear-gradient(315deg, #fff000 0%, #ed008c 74%)"
    fillBackgroundColor="#eee"
    containerSpacing={20}
    strengthMode={true}
    showInfo={true}
    showPercentage={true}
    topText="Total Hits:&nbsp;"
    bottomText="Max Hits:&nbsp;"
    percentageStyle={{}}
    infoNumbersStyle={{}}
    infoTextStyle={{}}
/>
```

## Props

| name | type | description | default value |
|---|---|---|---|
| totalHits | number | number of results | 0 |
| maxHits | number | the maximum number of possible results | 0 |
| width | number | the width of the meter (in pixels) | 200 |
| thickness | number | the thickness of the meter (in pixels) | 25 |
| slices | number | the number of meter slices | 6 |
| sliceGap | number | the spacing between slices (in pixels) | 2 |
| duration | number | the duration of the animation (in milliseconds) | 1000 |
| transitionTiming | string | the the timing function for the animation [details](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function) | "cubic-bezier(.17,.67,.83,.67)" |
| backgroundColor | string | the background color for the meter's container | "#fff" |
| fillColor | string | the color of the meter | "linear-gradient(315deg, #fff000 0%, #ed008c 74%)" |
| fillBackgroundColor | string | the background color of the meter | "#eee" |
| containerSpacing | number | the space (in pixels) between the container and the meter, this prop is allowed only when `showPercentage` is true, otherwise it is equal to 0 | 20 |
| strengthMode | boolean | whether fewer results will be displayed as a stronger search query or not | true |
| showInfo | boolean | whether to display the `maxHits` and `totalHits` information in the center of the meter or not | true |
| showPercentage | boolean | whether to display the percentage calculation in the outer part of the meter or not | true |
| topText | string | the label for the total hits information | "Total Hits: " |
| bottomText | string | the label for the max hits information | "Max Hits: " |

## License

 © [MIT](https://github.com/NadavShaar/react-query-meter/blob/master/LICENSE)
