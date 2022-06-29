import{r as t,h as i,g as s}from"./p-8388b2f5.js";import"./p-c428ff15.js";import{p as a}from"./p-c93f133f.js";import{d as n}from"./p-aa756c92.js";const e=class{constructor(i){t(this,i),this.animation="fadeInUp",this.outAnimation="fadeOut",this.delay=100,this.timing=20,this.active=!1}componentWillLoad(){this.children=Array.from(this.element.children)}async calculateTiming(){const t=1e3+this.children.length*this.delay;await n(t)}async out(){return a.set({"--animation":this.outAnimation},this.element),this.children.forEach((t,i)=>{t.style.setProperty("animation-delay",`${this.delay*i}ms`),t.style.setProperty("animation-timing",`${this.timing}ms`)}),await this.calculateTiming()}async in(){return this.active=!0,a.set({"--animation":this.animation},this.element),this.children.forEach((t,i)=>{t.style.setProperty("animation-delay",`${this.delay*i}ms`),t.style.setProperty("animation-timing",`${this.timing}ms`)}),await this.calculateTiming()}render(){return[i("stellar-intersection",{element:this.element.parentElement,in:this.in.bind(this)}),i("slot",null)]}get element(){return s(this)}static get style(){return":host,:host stellar-intersection{display:contents;--animation:fadeIn}:host ::slotted(*){opacity:0}:host([active]) ::slotted(*){-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-iteration-count:1;animation-iteration-count:1;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-timing-function:var(--ease);animation-timing-function:var(--ease);-webkit-animation-name:var(--animation);animation-name:var(--animation)}"}};export{e as stellar_reveal_list};