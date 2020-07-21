# react-query-meter

A query result visual meter.

[![NPM](https://img.shields.io/npm/v/react-query-meter.svg)](https://www.npmjs.com/package/react-query-meter) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

![query-meter](https://user-images.githubusercontent.com/8030614/87880420-3962ba80-c9fa-11ea-83a0-e7f5c40b994f.png)

Live [here](https://nadavshaar.github.io/react-query-meter/)

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
    sliceGap={3}
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

## License

 © [NadavShaar](https://github.com/NadavShaar)