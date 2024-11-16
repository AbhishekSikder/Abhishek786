import { LightningElement,api } from 'lwc';
import templateOne from "./templateOne.html";
import templateTwo from "./templateTwo.html";
import callbacktesting from "./callbacktesting.html"
export default class Callbacktesting extends LightningElement {
    @api showContent = false;
    getvalue='intial value'
    getinputvalue
    greeting='value give before'
    p='SF jungle'
    constructor(){
        super()
        console.log(this)
        console.log('Value before updated in constructor '+this.getvalue+', '+ this.greeting)
        this.getvalue='COnstructor value'
        console.log('Value updated in constructor '+this.getvalue)
    }

    connectedCallback(){
        console.log(this)
        console.log('Inside connected callback')
        this.getvalue=this.template.querySelector("div")
        this.greeting ='sfdcconnectedcallback';
        this.getinputvalue=this.template.querySelector('lightning-input')
        console.log('try to get htmllement value in connetcedcallback: '+this.getvalue+' '+this.greeting+' input field'+this.template.querySelector('lightning-input') )
    }
    renderedCallback(){
        console.log('Inside rendered callback')
        console.log('Before assigning any value to get value property in rendered callback '+this.getvalue+' '+this.greeting)
        this.getvalue=this.template.querySelector("div")
        this.greeting='sf renderedcallback';
        console.log('After assigning any value to get value property in rendered callback '+this.getvalue+', '+this.greeting+' '+this.template.querySelector('lightning-input'));
        
    }
    render() {
        
        return this.showTemplateOne ? templateOne : callbacktesting;
      }
    
      switchTemplate() {
        this.showTemplateOne = !this.showTemplateOne;
      }
    
    
}