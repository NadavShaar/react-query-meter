(this["webpackJsonpreact-query-meter-example"]=this["webpackJsonpreact-query-meter-example"]||[]).push([[0],[,,,function(e,t,a){e.exports=a(12)},function(e,t,a){},,,,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);a(4);var n=a(0),r=a.n(n),i=a(2),o=a.n(i),s=a(1);class l extends n.Component{constructor(e){super(e),this.state={degrees:0,percentage:0,roundedPercentage:0,maxHits:0,totalHits:0,style:this.getStyles(this.props)}}getStyles(e){return{container:{overflow:"hidden",padding:e.containerSpacing||0,display:"inline-flex",flexDirection:"column",position:"relative",background:e.backgroundColor,borderRadius:"".concat(2*e.width,"px ").concat(2*e.width,"px 0 0"),minHeight:e.showPercentage?"".concat(e.width/2+2*e.containerSpacing,"px"):"".concat(e.width/2-e.containerSpacing,"px"),maxHeight:e.showPercentage?"".concat(e.width/2+2*e.containerSpacing,"px"):"".concat(e.width/2-e.containerSpacing,"px")},wrapper:{width:e.width,minHeight:e.width/2,maxHeight:e.width/2,position:"relative",borderRadius:"".concat(2*e.width,"px ").concat(2*e.width,"px 0 0")},bottomLayer:{position:"absolute",top:0,left:0,background:e.fillBackgroundColor,borderRadius:"".concat(2*e.width,"px ").concat(2*e.width,"px 0 0"),width:e.width,height:e.width/2,zIndex:1},colorLayer:{position:"absolute",top:e.width/2,left:0,background:e.fillColor,borderRadius:"0 0 ".concat(2*e.width,"px ").concat(2*e.width,"px"),width:e.width,height:e.width/2,zIndex:2,transformOrigin:"50% 0%",transitionTimingFunction:e.transitionTiming,transitionProperty:"all",transitionDuration:"".concat(e.duration,"ms")},coverLayer:{position:"absolute",bottom:0,left:"50%",background:e.backgroundColor,borderRadius:"".concat(2*e.width,"px ").concat(2*e.width,"px 0 0"),width:e.width-2*e.thickness,height:e.width/2-e.thickness,transform:"translate(-50%, 0)",zIndex:4},bottomCoverLayer:{height:e.containerSpacing,background:e.backgroundColor,position:"absolute",bottom:0,left:0,right:0,margin:"0 ".concat(e.containerSpacing,"px"),zIndex:2,display:e.showPercentage?"block":"none"},seperator:{position:"absolute",bottom:0-e.sliceGap/2,left:"-2px",width:2+e.width/2,height:e.sliceGap,zIndex:3,overflow:"hidden",transformOrigin:"100% 50% 0px",background:e.backgroundColor},percentage:{transform:"rotate(-90deg)",position:"absolute",top:0,width:40,left:-36,fontSize:12,textAlign:"center",transformOrigin:"50% 0% 0px",cursor:"default"},detailsContainer:{flex:1,height:"100%",flexDirection:"column",justifyContent:"center",alignItems:"center",display:"flex",fontSize:12,paddingTop:7},labelText:{fontSize:13,color:"#4e4e4e"},labelNumber:{fontWeight:800,fontSize:13,color:"#4e4e4e"}}}refresh(e){if(this.isUnmounted)return;let t=this.getStyles(e),a=e.maxHits,n=e.strengthMode,r=e.totalHits||0,i=1===r?100:0===r?0:n?100-r/a*100:r/a*100;(i<0||!i)&&(i=0);let o=Math.floor(i);e.getPercentage&&e.getPercentage(o);let s=180*o/100;this.setState({percentage:i,roundedPercentage:o,degrees:s,maxHits:a,totalHits:r,style:t})}componentDidMount(){let e=this.getInfoData();e=e.concat(this.getPercentageData()),this.triggerAnimation(e)}getInfoData(){let e=[];return e.push({element:this.refs.totalHits,state:"totalHits",previous:0,current:0},{element:this.refs.maxHits,state:"maxHits",previous:0,current:0}),e}getPercentageData(){let e=[];return e.push({element:this.refs.percentage,state:"percentage",previous:0,current:0}),e}triggerAnimation(e){this.initElementsOfNumbers(e),this.refresh(this.props),this.animateNumbers(e)}shouldComponentUpdate(e,t){let a=["topText","bottomText"];for(let r=0;r<a.length;r++)if(this.props[a[r]]!==e[a[r]])return!0;let n=["maxHits","totalHits","degrees"];for(let r=0;r<n.length;r++)if(e[n[r]]!==t[n[r]])return!0;return!1}componentDidUpdate(e){e!==this.props&&(e.showInfo!==this.props.showInfo&&this.triggerAnimation(this.getInfoData()),e.showPercentage!==this.props.showPercentage&&this.triggerAnimation(this.getPercentageData()),this.refresh(this.props))}componentWillUnmount(){this.isUnmounted=!0}initElementsOfNumbers(e){e.forEach(e=>{e.element&&(e.element.innerHTML=e.current.toLocaleString(),e.next=this.state[e.state],e.startTime=Date.now())})}animateNumbers(e){let t=a=>{e.forEach(e=>{if(e.element){if(e.next!==this.state[e.state])if(e.previous===this.state[e.state]){var t=e.next-e.previous,a=t?(e.next-e.current||t)/t:0;e.startTime=Date.now()-this.props.duration*a,e.previous=e.next,e.next=this.state[e.state]}else e.startTime=Date.now(),e.previous=e.current,e.next=this.state[e.state];if(e.current==e.next)return e.startTime=Date.now(),void(e.previous=e.next);var n=Date.now()-e.startTime,r=Math.min(n/(this.props.duration||n),1),i=(e.next-e.previous)*r;e.current=e.previous+i,e.element.innerHTML=Math.round(e.current).toLocaleString()}}),window.requestAnimationFrame(t)};window.requestAnimationFrame(t)}renderSlices(){let e=[];for(let t=1;t<this.props.slices;t++)e.push(r.a.createElement("div",{key:t,style:Object(s.a)(Object(s.a)({},this.state.style.seperator),{},{transform:"rotate(".concat(180/this.props.slices*t,"deg)")})}));return e}renderPercentage(){if(this.props.showPercentage)return r.a.createElement("div",{"data-auto":"percentage",style:Object(s.a)(Object(s.a)({},this.state.style.percentage),this.props.percentageStyle),title:this.state.percentage+"%"},r.a.createElement("span",{ref:"percentage"}),"%")}renderInfo(){if(this.props.showInfo)return r.a.createElement("div",{style:Object(s.a)(Object(s.a)({},this.state.style.detailsContainer),this.props.infoContainerStyle)},r.a.createElement("div",{style:{display:"flex",alignItems:"baseline"}},r.a.createElement("span",{"data-auto":"selected-entity-type",style:Object(s.a)(Object(s.a)(Object(s.a)({},this.state.style.labelText),this.props.infoTextStyle),{},{textAlign:"center"})},this.props.topText),r.a.createElement("span",{"data-auto":"hits",ref:"totalHits",style:Object(s.a)(Object(s.a)({},this.state.style.labelNumber),this.props.infoNumbersStyle)})),r.a.createElement("div",{style:{display:"flex",alignItems:"baseline"}},r.a.createElement("span",{style:Object(s.a)(Object(s.a)({},this.state.style.labelText),this.props.infoTextStyle)},this.props.bottomText),r.a.createElement("span",{"data-auto":"all-from-type",ref:"maxHits",style:Object(s.a)(Object(s.a)({},this.state.style.labelNumber),this.props.infoNumbersStyle)})))}render(){let e=this.props.style;return r.a.createElement("div",{style:Object(s.a)(Object(s.a)({},this.state.style.container),e)},r.a.createElement("div",{style:this.state.style.wrapper},r.a.createElement("div",{style:this.state.style.bottomLayer}),r.a.createElement("div",{style:Object(s.a)(Object(s.a)({},this.state.style.colorLayer),{},{transform:"rotate(".concat(this.state.degrees,"deg)")})},this.renderPercentage()),r.a.createElement("div",{style:this.state.style.coverLayer},this.renderInfo()),r.a.createElement("div",null,this.renderSlices())),r.a.createElement("div",{style:this.state.style.bottomCoverLayer}))}}l.defaultProps={width:200,thickness:25,slices:6,sliceGap:2,duration:1e3,transitionTimingFunction:"ease-in-out",backgroundColor:"#fff",fillColor:"radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)",fillBackgroundColor:"#eee",containerSpacing:20,strengthMode:!0,style:{},percentageStyle:{},infoNumbersStyle:{},infoTextStyle:{},showInfo:!0,showPercentage:!0,topText:"Total Hits: ",bottomText:"Max Hits: ",firstAnimationDelay:0,totalHits:400,maxHits:1e3};var c=l;a(11);class h extends n.Component{constructor(e){super(e),this.state={isStrengthMode:!0,totalHits:0,maxHits:0,width:240,thickness:30,slices:8,slicesGap:5,duration:1e3,transitionTiming:"cubic-bezier(.17,.67,.83,.67)",backgroundColor:"#5b6b96",fillColor:"linear-gradient(316deg, #f42b03 0%, #ffbe0b 74%)",fillBackgroundColor:"#eee",containerSpacing:20,showInfo:!0,showPercentage:!0}}randomizeResults(e){let t=Math.floor(10001*Math.random()),a=Math.floor(Math.random()*t);e.setState({totalHits:a,maxHits:t})}render(){const e=this.state,t=e.totalHits,a=e.maxHits,n=e.isStrengthMode,i=e.width,o=e.thickness,s=e.slices,l=e.slicesGap,h=e.duration,d=e.transitionTiming,p=e.backgroundColor,m=e.fillColor,g=e.fillBackgroundColor,u=e.containerSpacing,f=e.showInfo,b=e.showPercentage;return r.a.createElement("div",{style:{display:"block",width:"100%",textAlign:"center"}},r.a.createElement("div",{style:{display:"inline-flex",flexDirection:"column",textAlign:"left",padding:20,borderRadius:8,boxShadow:"rgb(0 0 0 / 0.3) 1px 2px 3px 3px",backgroundColor:"#8d5185",backgroundImage:"linear-gradient(315deg, #493f61 0%, #7892d8 74%)"}},r.a.createElement(c,{style:{boxShadow:"rgb(43 43 43 / 0.2) -1px 2px 2px 2px"},totalHits:t,maxHits:a,width:i,thickness:o,slices:s,sliceGap:l,duration:h,transitionTiming:d,backgroundColor:p||"#fff",fillColor:m,fillBackgroundColor:g,containerSpacing:u,strengthMode:n,showInfo:f,showPercentage:b,topText:"Total Hits:\xa0",bottomText:"Max Hits:\xa0",percentageStyle:{color:"#fff"},infoNumbersStyle:{color:"#fff"},infoTextStyle:{color:"#fff"}}),r.a.createElement("button",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",background:"linear-gradient(316deg, #f94327 0%, #ff7d14 74%)",fontSize:12,margin:"20px auto",border:"5px solid #fff",cursor:"pointer",padding:10,outline:"none",width:70,height:70,borderRadius:"50%",boxShadow:"-2px 6px 6px 1px rgb(0 0 0 / 0.3)"},onClick:e=>this.randomizeResults(this)},r.a.createElement("svg",{id:"Capa_1","enable-background":"new 0 0 512 512",height:"35",viewBox:"0 0 512 512",width:"35",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("g",null,r.a.createElement("circle",{cx:"362",cy:"150",r:"15"}),r.a.createElement("circle",{cx:"304.068",cy:"92.068",r:"15"}),r.a.createElement("circle",{cx:"419.926",cy:"207.926",r:"15"}),r.a.createElement("path",{d:"m467 0h-210c-24.813 0-45 20.187-45 45v83.993c-5.748-2.6-12.031-3.979-18.529-3.979-12.02 0-23.321 4.681-31.82 13.181l-148.492 148.493c-17.544 17.546-17.544 46.094 0 63.64l148.493 148.492c8.499 8.5 19.8 13.181 31.82 13.181s23.32-4.681 31.819-13.181l148.493-148.492c13.584-13.586 16.642-33.764 9.189-50.327h84.027c24.813 0 45-20.187 45-45v-210.001c0-24.813-20.187-45-45-45zm-114.43 329.114-148.492 148.492c-2.833 2.833-6.6 4.394-10.606 4.394-4.007 0-7.773-1.561-10.607-4.394l-148.493-148.492c-5.849-5.849-5.849-15.365 0-21.214l148.493-148.492c2.833-2.833 6.6-4.394 10.607-4.394 4.006 0 7.773 1.561 10.606 4.394l148.492 148.492c5.849 5.849 5.849 15.366 0 21.214zm129.43-74.114c0 8.271-6.729 15-15 15h-109.904l-115.096-115.095v-109.905c0-8.271 6.729-15 15-15h210c8.271 0 15 6.729 15 15z"}),r.a.createElement("circle",{cx:"204.078",cy:"244.261",r:"15"}),r.a.createElement("circle",{cx:"119.225",cy:"329.114",r:"15"}),r.a.createElement("circle",{cx:"161.651",cy:"286.688",r:"15"}),r.a.createElement("circle",{cx:"267.717",cy:"307.901",r:"15"}),r.a.createElement("circle",{cx:"182.864",cy:"392.754",r:"15"}),r.a.createElement("circle",{cx:"225.291",cy:"350.327",r:"15"})))),r.a.createElement("div",{style:{display:"flex",flexDirection:"column",fontSize:14}},r.a.createElement("div",{style:{display:"flex",alignItems:"center"}},r.a.createElement("input",{name:"strengthMode",type:"checkbox",checked:n,onChange:e=>this.setState({isStrengthMode:!n})}),r.a.createElement("label",{htmlFor:"strengthMode"},"\xa0\xa0Strength Mode")),r.a.createElement("div",{style:{display:"flex",alignItems:"center"}},r.a.createElement("input",{name:"showInfo",type:"checkbox",checked:f,onChange:e=>this.setState({showInfo:!f})}),r.a.createElement("label",{htmlFor:"showInfo"},"\xa0\xa0Show-Info")),r.a.createElement("div",{style:{display:"flex",alignItems:"center"}},r.a.createElement("input",{name:"showPercentage",type:"checkbox",checked:b,onChange:e=>this.setState({showPercentage:!b})}),r.a.createElement("label",{htmlFor:"showPercentage"},"\xa0\xa0Show-Percentage")),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"width"},"Width"),r.a.createElement("input",{name:"width",type:"number",value:i,onChange:e=>this.setState({width:1*e.target.value})}),r.a.createElement("label",{htmlFor:"thickness"},"Thickness"),r.a.createElement("input",{name:"thickness",type:"number",value:o,onChange:e=>this.setState({thickness:1*e.target.value})}),r.a.createElement("label",{htmlFor:"slices"},"Slices"),r.a.createElement("input",{name:"slices",type:"number",value:s,onChange:e=>this.setState({slices:1*e.target.value})}),r.a.createElement("label",{htmlFor:"slicesGap"},"Slices-Gap"),r.a.createElement("input",{name:"slicesGap",type:"number",value:l,onChange:e=>this.setState({slicesGap:1*e.target.value})}),r.a.createElement("label",{htmlFor:"duration"},"Duration"),r.a.createElement("input",{name:"duration",type:"number",value:h,onChange:e=>this.setState({duration:1*e.target.value})}),r.a.createElement("label",{htmlFor:"transitionTiming"},"Transition-Timing"),r.a.createElement("input",{name:"transitionTiming",type:"text",value:d,onChange:e=>this.setState({transitionTiming:e.target.value})}),r.a.createElement("label",{htmlFor:"backgroundColor"},"Background-Color"),r.a.createElement("input",{name:"backgroundColor",type:"text",value:p,onChange:e=>this.setState({backgroundColor:e.target.value})}),r.a.createElement("label",{htmlFor:"fillColor"},"Fill-Color"),r.a.createElement("input",{name:"fillColor",type:"text",value:m,onChange:e=>this.setState({fillColor:e.target.value})}),r.a.createElement("label",{htmlFor:"fillBackgroundColor"},"Fill-Background-Color"),r.a.createElement("input",{name:"fillBackgroundColor",type:"text",value:g,onChange:e=>this.setState({fillBackgroundColor:e.target.value})}),r.a.createElement("label",{htmlFor:"containerSpacing"},"Container-Spacing"),r.a.createElement("input",{name:"containerSpacing",disabled:!b,type:"number",value:b?u:0,onChange:e=>this.setState({containerSpacing:1*e.target.value})}))))}}var d=h;o.a.render(r.a.createElement(d,null),document.getElementById("root"))}],[[3,1,2]]]);
//# sourceMappingURL=main.7d5361e1.chunk.js.map