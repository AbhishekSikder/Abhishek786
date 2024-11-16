import { LightningElement } from 'lwc';

export default class ClassCode1 extends LightningElement {
     welcomenote="Hello Everyone"
     handleonchange(event){
        this.welcomenote=event.target.value
     }
}