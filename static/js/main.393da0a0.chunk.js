(this["webpackJsonpreact-query-meter-example"]=this["webpackJsonpreact-query-meter-example"]||[]).push([[0],[,,function(e,t,n){e.exports=n(11)},function(e,t,n){},,,,,,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);n(3);var a=n(0),r=n.n(a),i=n(1),o=n.n(i);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var l=function(e){var t,n;function a(t){var n;return(n=e.call(this,t)||this).state={degrees:0,percentage:0,roundedPercentage:0,maxHits:0,totalHits:0,style:n.getStyles(n.props)},n}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var i=a.prototype;return i.getStyles=function(e){return{container:{overflow:"hidden",padding:e.containerSpacing||0,display:"inline-flex",flexDirection:"column",position:"relative",background:e.backgroundColor,borderRadius:2*e.width+"px "+2*e.width+"px 0 0",minHeight:e.showPercentage?e.width/2+"px":e.width/2-e.containerSpacing+"px",maxHeight:e.showPercentage?e.width/2+"px":e.width/2-e.containerSpacing+"px"},wrapper:{width:e.width,minHeight:e.width/2,maxHeight:e.width/2,position:"relative",borderRadius:2*e.width+"px "+2*e.width+"px 0 0"},bottomLayer:{position:"absolute",top:0,left:0,background:e.fillBackgroundColor,borderRadius:2*e.width+"px "+2*e.width+"px 0 0",width:e.width,height:e.width/2,zIndex:1},colorLayer:{position:"absolute",top:e.width/2,left:0,background:e.fillColor,borderRadius:"0 0 "+2*e.width+"px "+2*e.width+"px",width:e.width,height:e.width/2,zIndex:2,transformOrigin:"50% 0%",transitionTimingFunction:e.transitionTiming,transitionProperty:"all",transitionDuration:e.duration+"ms"},coverLayer:{position:"absolute",bottom:0,left:"50%",background:e.backgroundColor,borderRadius:2*e.width+"px "+2*e.width+"px 0 0",width:e.width-2*e.thickness,height:e.width/2-e.thickness,transform:"translate(-50%, 0)",zIndex:4},bottomCoverLayer:{height:e.containerSpacing,background:e.backgroundColor,position:"absolute",bottom:0,left:0,right:0,margin:"0 "+e.containerSpacing+"px",zIndex:2,display:e.showPercentage?"block":"none"},seperator:{position:"absolute",bottom:0-e.sliceGap/2,left:"-2px",width:2+e.width/2,height:e.sliceGap,zIndex:3,overflow:"hidden",transformOrigin:"100% 50% 0px",background:e.backgroundColor},percentage:{transform:"rotate(-90deg)",position:"absolute",top:0,width:40,left:-36,fontSize:12,textAlign:"center",transformOrigin:"50% 0% 0px",cursor:"default"},detailsContainer:{flex:1,height:"100%",flexDirection:"column",justifyContent:"center",alignItems:"center",display:"flex",fontSize:12,paddingTop:7},labelText:{fontSize:13,color:"#4e4e4e"},labelNumber:{fontWeight:800,fontSize:13,color:"#4e4e4e"}}},i.refresh=function(e){if(!this.isUnmounted){var t=this.getStyles(e),n=e.maxHits,a=e.strengthMode,r=e.totalHits||0,i=1===r?100:0===r?0:a?100-r/n*100:r/n*100;(i<0||!i)&&(i=0);var o=Math.floor(i);e.getPercentage&&e.getPercentage(o);var s=180*o/100;this.setState({percentage:i,roundedPercentage:o,degrees:s,maxHits:n,totalHits:r,style:t})}},i.componentDidMount=function(){var e=this.getInfoData();e=e.concat(this.getPercentageData()),this.triggerAnimation(e)},i.getInfoData=function(){var e=[];return e.push({element:this.refs.totalHits,state:"totalHits",previous:0,current:0},{element:this.refs.maxHits,state:"maxHits",previous:0,current:0}),e},i.getPercentageData=function(){var e=[];return e.push({element:this.refs.percentage,state:"percentage",previous:0,current:0}),e},i.triggerAnimation=function(e){this.initElementsOfNumbers(e),this.refresh(this.props),this.animateNumbers(e)},i.shouldComponentUpdate=function(e,t){for(var n=["topText","bottomText"],a=0;a<n.length;a++)if(this.props[n[a]]!==e[n[a]])return!0;for(var r=["maxHits","totalHits","degrees"],i=0;i<r.length;i++)if(e[r[i]]!==t[r[i]])return!0;return!1},i.componentDidUpdate=function(e){e!==this.props&&(e.showInfo!==this.props.showInfo&&this.triggerAnimation(this.getInfoData()),e.showPercentage!==this.props.showPercentage&&this.triggerAnimation(this.getPercentageData()),this.refresh(this.props))},i.componentWillUnmount=function(){this.isUnmounted=!0},i.initElementsOfNumbers=function(e){var t=this;e.forEach((function(e){e.element&&(e.element.innerHTML=e.current.toLocaleString(),e.next=t.state[e.state],e.startTime=Date.now())}))},i.animateNumbers=function(e){var t=this;window.requestAnimationFrame((function n(a){e.forEach((function(e){if(e.element){if(e.next!==t.state[e.state])if(e.previous===t.state[e.state]){var n=e.next-e.previous,a=n?(e.next-e.current||n)/n:0;e.startTime=Date.now()-t.props.duration*a,e.previous=e.next,e.next=t.state[e.state]}else e.startTime=Date.now(),e.previous=e.current,e.next=t.state[e.state];if(e.current==e.next)return e.startTime=Date.now(),void(e.previous=e.next);var r=Date.now()-e.startTime,i=Math.min(r/(t.props.duration||r),1),o=(e.next-e.previous)*i;e.current=e.previous+o,e.element.innerHTML=Math.round(e.current).toLocaleString()}})),window.requestAnimationFrame(n)}))},i.renderSlices=function(){for(var e=[],t=1;t<this.props.slices;t++)e.push(r.a.createElement("div",{key:t,style:s({},this.state.style.seperator,{transform:"rotate("+180/this.props.slices*t+"deg)"})}));return e},i.renderPercentage=function(){if(this.props.showPercentage)return r.a.createElement("div",{"data-auto":"percentage",style:s({},this.state.style.percentage,this.props.percentageStyle),title:this.state.percentage+"%"},r.a.createElement("span",{ref:"percentage"}),"%")},i.renderInfo=function(){if(this.props.showInfo)return r.a.createElement("div",{style:s({},this.state.style.detailsContainer,this.props.infoContainerStyle)},r.a.createElement("div",{style:{display:"flex",alignItems:"baseline"}},r.a.createElement("span",{"data-auto":"selected-entity-type",style:s({},this.state.style.labelText,this.props.infoTextStyle,{textAlign:"center"})},this.props.topText),r.a.createElement("span",{"data-auto":"hits",ref:"totalHits",style:s({},this.state.style.labelNumber,this.props.infoNumbersStyle)})),r.a.createElement("div",{style:{display:"flex",alignItems:"baseline"}},r.a.createElement("span",{style:s({},this.state.style.labelText,this.props.infoTextStyle)},this.props.bottomText),r.a.createElement("span",{"data-auto":"all-from-type",ref:"maxHits",style:s({},this.state.style.labelNumber,this.props.infoNumbersStyle)})))},i.render=function(){return r.a.createElement("div",{style:this.state.style.container},r.a.createElement("div",{style:this.state.style.wrapper},r.a.createElement("div",{style:this.state.style.bottomLayer}),r.a.createElement("div",{style:s({},this.state.style.colorLayer,{transform:"rotate("+this.state.degrees+"deg)"})},this.renderPercentage()),r.a.createElement("div",{style:this.state.style.coverLayer},this.renderInfo()),r.a.createElement("div",null,this.renderSlices())),r.a.createElement("div",{style:this.state.style.bottomCoverLayer}))},a}(a.Component);l.defaultProps={width:200,thickness:25,slices:6,sliceGap:2,duration:1e3,transitionTimingFunction:"ease-in-out",backgroundColor:"#fff",fillColor:"radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)",fillBackgroundColor:"#eee",containerSpacing:20,strengthMode:!0,percentageStyle:{},infoNumbersStyle:{},infoTextStyle:{},showInfo:!0,showPercentage:!0,topText:"Total Hits: ",bottomText:"Max Hits: ",firstAnimationDelay:0,totalHits:400,maxHits:1e3};var c=l;n(10);class h extends a.Component{constructor(e){super(e),this.state={isStrengthMode:!0,totalHits:0,maxHits:0,width:240,thickness:30,slices:8,slicesGap:5,duration:1e3,transitionTiming:"cubic-bezier(.17,.67,.83,.67)",backgroundColor:"#3f1f71",fillColor:"linear-gradient(316deg, #f42b03 0%, #ffbe0b 74%)",fillBackgroundColor:"#eee",containerSpacing:20,showInfo:!0,showPercentage:!0}}randomizeResults(e){let t=Math.floor(10001*Math.random()),n=Math.floor(Math.random()*t);e.setState({totalHits:n,maxHits:t})}render(){const e=this.state,t=e.totalHits,n=e.maxHits,a=e.isStrengthMode,i=e.width,o=e.thickness,s=e.slices,l=e.slicesGap,h=e.duration,p=e.transitionTiming,m=e.backgroundColor,d=e.fillColor,u=e.fillBackgroundColor,g=e.containerSpacing,f=e.showInfo,x=e.showPercentage;return r.a.createElement("div",{style:{display:"block",width:"100%",textAlign:"center"}},r.a.createElement("div",{style:{display:"inline-flex",flexDirection:"column",padding:"10px 20px 20px",boxShadow:"1px 1px 2px 1px rgb(0 0 0 / 0.3)",borderRadius:6,background:"#3f1f71"}},r.a.createElement(c,{totalHits:t,maxHits:n,width:i,thickness:o,slices:s,sliceGap:l,duration:h,transitionTiming:p,backgroundColor:m||"#fff",fillColor:d,fillBackgroundColor:u,containerSpacing:g,strengthMode:a,showInfo:f,showPercentage:x,topText:"Total Hits:\xa0",bottomText:"Max Hits:\xa0",percentageStyle:{color:"#fff"},infoNumbersStyle:{color:"#fff"},infoTextStyle:{color:"#fff"}}),r.a.createElement("button",{style:{background:"#ff5f22",fontSize:12,margin:"20px auto",border:"5px solid #fff",cursor:"pointer",padding:10,outline:"none",width:110,height:110,borderRadius:"50%",boxShadow:"-2px 6px 6px 1px rgb(0 0 0 / 0.3)"},onClick:e=>this.randomizeResults(this)},r.a.createElement("svg",{id:"Capa_1","enable-background":"new 0 0 512 512",height:"30",viewBox:"0 0 512 512",width:"30",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("g",null,r.a.createElement("circle",{cx:"362",cy:"150",r:"15"}),r.a.createElement("circle",{cx:"304.068",cy:"92.068",r:"15"}),r.a.createElement("circle",{cx:"419.926",cy:"207.926",r:"15"}),r.a.createElement("path",{d:"m467 0h-210c-24.813 0-45 20.187-45 45v83.993c-5.748-2.6-12.031-3.979-18.529-3.979-12.02 0-23.321 4.681-31.82 13.181l-148.492 148.493c-17.544 17.546-17.544 46.094 0 63.64l148.493 148.492c8.499 8.5 19.8 13.181 31.82 13.181s23.32-4.681 31.819-13.181l148.493-148.492c13.584-13.586 16.642-33.764 9.189-50.327h84.027c24.813 0 45-20.187 45-45v-210.001c0-24.813-20.187-45-45-45zm-114.43 329.114-148.492 148.492c-2.833 2.833-6.6 4.394-10.606 4.394-4.007 0-7.773-1.561-10.607-4.394l-148.493-148.492c-5.849-5.849-5.849-15.365 0-21.214l148.493-148.492c2.833-2.833 6.6-4.394 10.607-4.394 4.006 0 7.773 1.561 10.606 4.394l148.492 148.492c5.849 5.849 5.849 15.366 0 21.214zm129.43-74.114c0 8.271-6.729 15-15 15h-109.904l-115.096-115.095v-109.905c0-8.271 6.729-15 15-15h210c8.271 0 15 6.729 15 15z"}),r.a.createElement("circle",{cx:"204.078",cy:"244.261",r:"15"}),r.a.createElement("circle",{cx:"119.225",cy:"329.114",r:"15"}),r.a.createElement("circle",{cx:"161.651",cy:"286.688",r:"15"}),r.a.createElement("circle",{cx:"267.717",cy:"307.901",r:"15"}),r.a.createElement("circle",{cx:"182.864",cy:"392.754",r:"15"}),r.a.createElement("circle",{cx:"225.291",cy:"350.327",r:"15"}))),"RANDOMIZE"),r.a.createElement("div",{style:{display:"flex",flexDirection:"column",fontSize:14}},r.a.createElement("div",{style:{display:"flex",alignItems:"center"}},r.a.createElement("input",{name:"strengthMode",type:"checkbox",checked:a,onChange:e=>this.setState({isStrengthMode:!a})}),r.a.createElement("label",{htmlFor:"strengthMode"},"\xa0\xa0Strength Mode")),r.a.createElement("div",{style:{display:"flex",alignItems:"center"}},r.a.createElement("input",{name:"showInfo",type:"checkbox",checked:f,onChange:e=>this.setState({showInfo:!f})}),r.a.createElement("label",{htmlFor:"showInfo"},"\xa0\xa0Show-Info")),r.a.createElement("div",{style:{display:"flex",alignItems:"center"}},r.a.createElement("input",{name:"showPercentage",type:"checkbox",checked:x,onChange:e=>this.setState({showPercentage:!x})}),r.a.createElement("label",{htmlFor:"showPercentage"},"\xa0\xa0Show-Percentage")),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"width"},"Width"),r.a.createElement("input",{name:"width",type:"number",value:i,onChange:e=>this.setState({width:1*e.target.value})}),r.a.createElement("label",{htmlFor:"thickness"},"Thickness"),r.a.createElement("input",{name:"thickness",type:"number",value:o,onChange:e=>this.setState({thickness:1*e.target.value})}),r.a.createElement("label",{htmlFor:"slices"},"Slices"),r.a.createElement("input",{name:"slices",type:"number",value:s,onChange:e=>this.setState({slices:1*e.target.value})}),r.a.createElement("label",{htmlFor:"slicesGap"},"Slices-Gap"),r.a.createElement("input",{name:"slicesGap",type:"number",value:l,onChange:e=>this.setState({slicesGap:1*e.target.value})}),r.a.createElement("label",{htmlFor:"duration"},"Duration"),r.a.createElement("input",{name:"duration",type:"number",value:h,onChange:e=>this.setState({duration:1*e.target.value})}),r.a.createElement("label",{htmlFor:"transitionTiming"},"Transition-Timing"),r.a.createElement("input",{name:"transitionTiming",type:"text",value:p,onChange:e=>this.setState({transitionTiming:e.target.value})}),r.a.createElement("label",{htmlFor:"backgroundColor"},"Background-Color"),r.a.createElement("input",{name:"backgroundColor",type:"text",value:m,onChange:e=>this.setState({backgroundColor:e.target.value})}),r.a.createElement("label",{htmlFor:"fillColor"},"Fill-Color"),r.a.createElement("input",{name:"fillColor",type:"text",value:d,onChange:e=>this.setState({fillColor:e.target.value})}),r.a.createElement("label",{htmlFor:"fillBackgroundColor"},"Fill-Background-Color"),r.a.createElement("input",{name:"fillBackgroundColor",type:"text",value:u,onChange:e=>this.setState({fillBackgroundColor:e.target.value})}),r.a.createElement("label",{htmlFor:"containerSpacing"},"Container-Spacing"),r.a.createElement("input",{name:"containerSpacing",disabled:!x,type:"number",value:x?g:0,onChange:e=>this.setState({containerSpacing:1*e.target.value})}))))}}var p=h;o.a.render(r.a.createElement(p,null),document.getElementById("root"))}],[[2,1,2]]]);
//# sourceMappingURL=main.393da0a0.chunk.js.map