import{r as e,h as s,g as t}from"./p-8388b2f5.js";import{z as a}from"./p-22e0cac7.js";const r=class{constructor(s){e(this,s),this.length=!1,this.uppercase=!1,this.number=!1,this.symbol=!1,this.commonPasswords=!0,this.commonNames=!0,this.repeated=!0}componentDidLoad(){setTimeout(()=>{this.input=document.querySelector(`stellar-input[name="${this.for}"]`),this.input.addEventListener("update",e=>{this.value=e.detail})},1e3)}get fs(){return"tiny"===this.size?"fs7":"small"===this.size?"fs6":"large"===this.size?"fs4":"fs5"}get icon(){return"tiny"===this.size?"fs6":"small"===this.size?"fs5":"large"===this.size?"fs1":"fs4"}handleValueChange(){const e=a(this.value);this.length=this.value.length>=10,this.uppercase=/[A-Z]/.test(this.value),this.number=/[0-9]/.test(this.value),this.symbol=/[^A-Za-z0-9]/.test(this.value),this.commonPasswords="This is a very common password"!==e.feedback.warning,this.commonNames="Names and surnames by themselves are easy to guess"!==e.feedback.warning,this.repeated='Repeats like "abcabcabc" are only slightly harder to guess than "abc"'!==e.feedback.warning}renderLength(){return s("p",{class:`${this.fs} flex items-center mb3 pa0 ma0 ${this.length?"theme-green":"theme-red"}`},s("stellar-asset",{class:`${this.icon} fs4 dib mr2 theme-base7`,name:this.length?"checkmark-circle-outline":"close-circle-outline"}),s("small",null,"10 characters or longer"))}renderUppercase(){return s("p",{class:`${this.fs} flex items-center mb3 pa0 ma0 ${this.uppercase?"theme-green":"theme-red"}`},s("stellar-asset",{class:`${this.icon} fs4 dib mr2 theme-base7`,name:this.uppercase?"checkmark-circle-outline":"close-circle-outline"}),s("small",null,"At least 1 uppercase character"))}renderNumber(){return s("p",{class:`${this.fs} flex items-center mb3 pa0 ma0 ${this.number?"theme-green":"theme-red"}`},s("stellar-asset",{class:`${this.icon} fs4 dib mr2 theme-base7`,name:this.number?"checkmark-circle-outline":"close-circle-outline"}),s("small",null,"At least 1 number"))}renderSymbol(){return s("p",{class:`${this.fs} flex items-center mb3 pa0 ma0 ${this.symbol?"theme-green":"theme-red"}`},s("stellar-asset",{class:`${this.icon} fs4 dib mr2 theme-base7`,name:this.symbol?"checkmark-circle-outline":"close-circle-outline"}),s("small",null,"At least 1 symbol"))}renderCommonPasswords(){return s("p",{class:`${this.fs} flex items-center mb3 pa0 ma0 ${this.commonPasswords?"theme-green":"theme-red"}`},s("stellar-asset",{class:`${this.icon} fs4 dib mr2 theme-base7`,name:this.commonPasswords?"checkmark-circle-outline":"close-circle-outline"}),s("small",null,"Cannot be common passwords ('password123 is bad')"))}renderCommonNames(){return s("p",{class:`${this.fs} flex items-center mb3 pa0 ma0 ${this.commonNames?"theme-green":"theme-red"}`},s("stellar-asset",{class:`${this.icon} fs4 dib mr2 theme-base7`,name:this.commonNames?"checkmark-circle-outline":"close-circle-outline"}),s("small",null,"Cannot be a name ('andrew')"))}renderRepeatedKeys(){return s("p",{class:`${this.fs} flex items-center mb3 pa0 ma0 ${this.repeated?"theme-green":"theme-red"}`},s("stellar-asset",{class:`${this.icon} fs4 dib mr2 theme-base7`,name:this.repeated?"checkmark-circle-outline":"close-circle-outline"}),s("small",null,"Cannot be repeated keys ('asdfasdfasdf')"))}render(){return[this.renderLength(),this.renderUppercase(),this.renderNumber(),this.renderSymbol(),this.renderCommonPasswords(),this.renderCommonNames(),this.renderRepeatedKeys()]}get element(){return t(this)}static get watchers(){return{value:["handleValueChange"]}}};export{r as stellar_password_requirements};