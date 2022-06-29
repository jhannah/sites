import{r as t,e as s,h as i,g as h}from"./p-8388b2f5.js";import"./p-c428ff15.js";import{p as e}from"./p-c93f133f.js";const a=class{constructor(i){t(this,i),this.trackInView=!0,this.preload="auto",this.autoplay=!1,this.muted=!1,this.playsinline=!1,this.controls=!0,this.playing=!1,this.duration=0,this.startTime=0,this.pausedTime=0,this.currentTime=0,this.update=s(this,"update",7),this.played=s(this,"played",7),this.paused=s(this,"paused",7),this.loaded=s(this,"loaded",7)}componentDidLoad(){this.video_tag=this.element.querySelector("video"),this.video_tag.onplay=()=>{this.playing=!0,this.played.emit(this.eventData),this.update.emit(this.eventData)},this.video_tag.onpause=()=>{this.playing=!1,this.pausedTime=this.video_tag.currentTime,this.paused.emit(this.eventData),this.update.emit(this.eventData)},this.video_tag.onloadedmetadata=()=>{this.setDimensions(),this.duration=this.video_tag.duration,this.loaded.emit(this.eventData)}}get eventData(){return{playing:this.playing,currentTime:this.currentTime,pausedTime:this.pausedTime,startTime:this.startTime,duration:this.duration}}startInterval(){this.playing?this.interval=setInterval(()=>{this.currentTime=this.video_tag.currentTime,this.update.emit(this.eventData)},30):clearInterval(this.interval)}setDimensions(){this.width=this.width?this.width:this.video_tag.videoWidth,this.height=this.height?this.height:this.video_tag.videoHeight,e.set({"--width":`${this.width}`,"--height":`${this.height}`,"--aspect-ratio":`${this.height/this.width*100}%`},this.element)}in(){this.autoplay&&this.video_tag.play()}out(){this.video_tag.currentTime=0,this.video_tag.pause()}async getDuration(){return this.video_tag.duration}async play(){this.video_tag.play()}async pause(){this.video_tag.pause()}async toggle(){this.video_tag.paused?this.play():this.pause()}async stop(){this.skipTo(0),this.video_tag.pause()}async skipTo(t){await this.pause(),this.video_tag.currentTime=1e3*t,await this.play()}render(){return i("video",{preload:this.preload,width:this.width,height:this.height,autoplay:this.autoplay,muted:this.muted,playsinline:this.playsinline,poster:this.poster,controls:this.controls},i("slot",null),i("stellar-intersection",{element:this.element,multiple:!0,in:this.in.bind(this),out:this.out.bind(this)}))}get element(){return h(this)}static get watchers(){return{playing:["startInterval"]}}static get style(){return"stellar-video{display:block;width:100%;height:0;position:relative;overflow:hidden;padding-bottom:var(--aspect-ratio)}stellar-video:after,stellar-video video{width:100%;height:100%;position:absolute;top:0;left:0;right:0;bottom:0}stellar-video:after{content:\"\";display:block;pointer-events:none;z-index:2;mix-blend-mode:color}stellar-video[overlay]:after{background:linear-gradient(35deg,var(--theme-complement5),var(--theme-base5) 40%,var(--theme-complement5));mix-blend-mode:color}\@media not all and (min-resolution:.001dpcm){\@media{stellar-video[overlay]:after{mix-blend-mode:hard-light;opacity:.5}}}"}};export{a as stellar_video};