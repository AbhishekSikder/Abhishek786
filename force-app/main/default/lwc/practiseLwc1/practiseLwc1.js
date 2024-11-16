import { LightningElement } from 'lwc';
const CLASS_1='class1';
const CLASS_2='class2';
export default class PractiseLwc1 extends LightningElement {
    _class=CLASS_1;
    get myclass(){
        return this._class
    }
    handleChange(event){
       v= this.template.querySelector('[data="1"]')

       if(this._class==CLASS_1){

            this._class=CLASS_2
       }
       else{
            this._class=CLASS_1
       }
    }
}