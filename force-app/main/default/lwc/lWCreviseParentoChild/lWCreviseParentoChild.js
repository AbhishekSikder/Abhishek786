import { LightningElement,track } from 'lwc';

export default class LWCreviseParentoChild extends LightningElement {
    @track showred=false;
    students=['abc','xyz','pqr','mnop']
    @track Studentname='';
     welcomenote
    handleoncheck(event){
        
        this.showred=event.target.checked;
        console.log(this.showred);
    }
    handleonchange(event){
        this.welcomenote= event.target.value;
        this.showred=this.welcomenote===''||this.welcomenote===null||this.welcomenote===undefined;
    }
    handlechild(event){
        this.Studentname=event.target.value;
        const childcomp=this.template.querySelector('c-child-comp-practise-new');
        childcomp.ValuefromParent(this.Studentname);
    }
}