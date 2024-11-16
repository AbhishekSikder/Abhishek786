import { LightningElement,api,wire} from 'lwc';
import { getFieldValue } from 'lightning/uiRecordApi';
import PICTURE_FIELD from '@salesforce/schema/Car__c.Picture_URL__c';
export default class CarTile extends LightningElement {
    @api indivisualcardetail
    
   // @wire(getFieldValue,{indivisualcardetail,PICTURE_FIELD})a

    get carurl(){
        return getFieldValue(this.indivisualcardetail,PICTURE_FIELD)
    }
    handleClick(){
        const e=new CustomEvent('selected',{detail:this.indivisualcardetail.Id})
        this.dispatchEvent(e)
    }
    
}