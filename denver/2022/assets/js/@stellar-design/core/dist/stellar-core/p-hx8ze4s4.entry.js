import{r as t,h as s,H as e,g as i}from"./p-8388b2f5.js";const h=class{constructor(s){t(this,s),this.size=200}componentWillLoad(){this.handleTime(),this.handleBetween()}componentDidLoad(){this.handleBetween()}handleTime(){"string"==typeof this.time?this.time=new Date(this.time):this.time||(this.time=new Date),this.hourAngle=360*this.time.getHours()/12,this.minuteAngle=360*this.time.getMinutes()/60,this.secondAngle=360*this.time.getSeconds()/60}handleBetween(){"string"==typeof this.between&&(this.between=new Date(this.between)),this.element.shadowRoot.querySelector("stellar-chart")&&this.element.shadowRoot.querySelector("stellar-chart").options(this.chartConfig)}get duration(){if(this.time.constructor===Date&&this.between.constructor===Date)return this.between.getHours()-this.time.getHours()}get offset(){if(this.time.constructor===Date){const t=this.time.getMinutes();return this.getHours12(this.time)+(0===t?0:t/60)}}getHours12(t){return(t.getHours()+11)%12+1}getMeridian(t){return t.getHours()>12?"pm":"am"}formatted(t){return this.getHours12(t)+this.getMeridian(t)}get rotation(){return 30*this.offset}get chartConfig(){return{chart:{type:"pie",margin:0,padding:0,plotShadow:!1,plotBackgroundColor:"transparent",backgroundColor:"transparent",height:this.size,width:this.size},title:!1,tooltip:{enabled:!1},plotOptions:{series:{dataLabels:!1,animation:!1},pie:{size:.975*this.size,startAngle:this.rotation}},series:[{name:"Brands",data:[{y:this.duration,color:"var(--theme-base5)",borderColor:"var(--black)",borderWidth:.0125*this.size},{color:"transparent",borderColor:"transparent",y:12-this.duration}]}]}}render(){return s(e,{style:{"--size":`${this.size}px`}},s("svg",{viewBox:`0 0 ${this.size} ${this.size}`},s("g",null,s("circle",{id:"circle",style:{stroke:"var(--theme-base5)","stroke-width":`${.02*this.size}px`,fill:"var(--theme-base0)"},cx:this.size/2,cy:this.size/2,r:this.size/2*.95})),Array(12).fill("").map((t,e)=>s("line",{x1:this.size/2,y1:this.size/100+this.size/8,x2:this.size/2,y2:this.size/100+this.size/30,transform:`rotate(${30*e} ${this.size/2} ${this.size/2})`,style:{stroke:"#000","stroke-width":`${this.size/80}px`}}))),s("stellar-chart",{type:"pie",id:"chart",class:this.between?"db":"dn"}),s("svg",{class:"above",viewBox:`0 0 ${this.size} ${this.size}`},s("g",null,s("line",{x1:this.size/2,y1:this.size/2,x2:this.size/2,y2:.7*this.size,transform:`rotate(${this.hourAngle-180} ${this.size/2} ${this.size/2})`,style:{"stroke-width":`${.03*this.size}px`,stroke:"var(--theme-base9)"},id:"hourhand"}),s("line",{x1:this.size/2,y1:this.size/2,x2:this.size/2,y2:.8*this.size,transform:`rotate(${this.minuteAngle-180} ${this.size/2} ${this.size/2})`,style:{"stroke-width":`${.04*this.size}px`,stroke:"var(--theme-base7)"},id:"minutehand"}),s("line",{x1:this.size/2,y1:this.size/2,x2:this.size/2,y2:.9*this.size,transform:`rotate(${this.secondAngle-180} ${this.size/2} ${this.size/2})`,style:{"stroke-width":`${.02*this.size}px`,stroke:"var(--theme-base3)"},id:"secondhand"})),s("circle",{id:"center",style:{fill:"var(--theme-base0)",stroke:"var(--theme-base3)","stroke-width":"5px"},cx:this.size/2,cy:this.size/2,r:.02*this.size})),s("stellar-tooltip",{align:"bottom-center"},!this.between&&"object"==typeof this.time&&this.time.toLocaleTimeString("en-US"),this.between&&"object"==typeof this.time&&"object"==typeof this.between&&`From ${this.formatted(this.time)} to ${this.formatted(this.between)}`))}get element(){return i(this)}static get watchers(){return{time:["handleTime","handleBetween"],between:["handleBetween"],size:["handleBetween"]}}static get style(){return":host{display:inline-block;position:relative}:host,:host stellar-chart{width:var(--size);height:var(--size)}:host stellar-chart{position:absolute;top:0;left:0;display:none;--background:transparent!important}:host .above,:host stellar-chart.db{display:block}:host .above{position:absolute;top:0;left:0;height:var(--size);width:var(--size)}"}};export{h as stellar_clock};