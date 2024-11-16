import { LightningElement,track } from 'lwc';

export default class CheckAndUncheckUsingButton extends LightningElement {

    @track v=['option 1']

    get options(){
        return [{label:"first", value:'option 1'},{label:"second", value:'option 2'},{label:"third", value:'option 3'}]
    }

    handleSave(){
        
        
        this.v=this.options.map((o)=>{
            return o.value
        })
        console.log(v)

    }
    handleUnCheck(){
        this.v=[]
    }
}