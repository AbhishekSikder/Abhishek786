import { LightningElement,track } from 'lwc';

export default class LwcVariables extends LightningElement {
    name="Abhishek"
    phone=123450000
    @track salary=5;
    @track finalsal;
    dob;
    show(event){
        var a=this.salary;
        const evtname=event.target.name;
        if(evtname=='salary'){
        this.salary=event.target.value;
        }
        this.finalsal=parseInt(this.salary);
        
       /* this.salary=event.target.value;
        this.finalsal=parseInt(this.salary)*2;*/
    }
    showme(event){
        return this.finalsal;
    }
}