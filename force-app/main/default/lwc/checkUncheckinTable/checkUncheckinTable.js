import { LightningElement } from 'lwc';

export default class CheckUncheckinTable extends LightningElement {

    handleSave(){
        let v=this.template.querySelectorAll('.ch')
        console.log(v)
        v.forEach((vi)=>{
            console.log(vi)
            vi.checked=true
            
        })
    }
}