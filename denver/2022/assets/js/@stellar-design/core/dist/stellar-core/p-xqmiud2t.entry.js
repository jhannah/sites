import{r as t,e,g as a}from"./p-8388b2f5.js";const s=class{constructor(a){t(this,a),this.apikey="92674815cd1092788c3539587f077d61",this.TimeState=t=>({0:"night",1:"night",2:"night",3:"night",4:"night",5:"night",6:"dawn",7:"dawn",8:"dawn",9:"dawn",10:"dawn",11:"dawn",12:"day",13:"day",14:"day",15:"day",16:"day",17:"day",18:"dusk",19:"dusk",20:"dusk",21:"dusk",22:"dusk",23:"dusk"})[t]||"",this.timeChange=e(this,"timeChange",7),this.weatherChange=e(this,"weatherChange",7)}componentWillLoad(){this.time&&this.handleTime(),this.weather&&this.handleWeather()}handleTime(){var t=new Date;this.timeState=this.TimeState(t.getHours())}handleWeather(){let t;void 0!==sessionStorage.weather?t=sessionStorage.weather:navigator.geolocation.getCurrentPosition(async e=>{var a=`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${this.apikey}/${e.coords.latitude},${e.coords.longitude}`;const s=await fetch(a),h=await s.json();sessionStorage.weather=h.currently.icon.toLowerCase(),t=h.currently.icon.toLowerCase(),this.weatherState=t},()=>{}),this.weatherState=t}handleTimeState(){this.timeChange.emit(this.timeState),document.querySelector("html").setAttribute("time",this.timeState)}handleWeatherState(){this.weatherChange.emit(this.weatherState),document.querySelector("html").setAttribute("weather",this.weatherState)}get element(){return a(this)}static get watchers(){return{time:["handleTime"],weather:["handleWeather"],timeState:["handleTimeState"],weatherState:["handleWeatherState"]}}};export{s as stellar_context};