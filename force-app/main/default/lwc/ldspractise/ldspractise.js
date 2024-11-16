import { LightningElement, wire } from 'lwc';
import { getPicklistValues,getObjectInfo} from 'lightning/uiObjectInfoApi';// import getpicklistvalues adapter interface from lighnting/uiobjectinfoapi module
import { getRecord } from 'lightning/uiRecordApi';
import { createRecord } from 'lightning/uiRecordApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';
import { CloseActionScreenEvent } from "lightning/actions";
import { showToastEvent } from "lightning/actions";

export default class Ldspractise extends LightningElement {

    name
    industry;
    i='';
    rating='';
    accountRecordTypeId;

    @wire (getObjectInfo, {objectApiName:ACCOUNT_OBJECT})
    results ({error,data}){
        if(data){
            this.accountRecordTypeId=data.defaultRecordTypeId;
        }
        else{
            this.error = error;
             this.accountRecordTypeId = undefined;
        }
    }
    @wire(getPicklistValues,{recordTypeId:"$accountRecordTypeId",fieldApiName:INDUSTRY_FIELD})
    picklistResults({ error, data }) {
        if (data) {
          this.industry = data.values;
          this.error = undefined;
        } else if (error) {
          this.error = error;
          this.industry = undefined;
        }
      }

    get optionsb(){
        return [
            {label:'Cold',value:'cold'},
            {label:'Hot' ,value:'hot'},
            {label:'Warm',value:'warm'}
        ]
    }
    handleChangeb(event){
        this.rating=event.detail.value;
    }

    get options(){
        return this.industry
            
    }
    handleChange(event){
        this.i=event.detail.value;
    }
    handleSuccess(e){
        this.dispatchEvent(new CloseActionScreenEvent());
        this.dispatchEvent(new showToastEvent({
            title: "Success",
            message: "Record updated!",
            variant: "success",
        }));
    }
    
    
}