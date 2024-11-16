import { LightningElement,track } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';
import PHONE_FIELD from '@salesforce/schema/Account.Phone';
import {showtoastevent } from 'lightning/platformShowTOastEvent';

export default class Lwcjan1 extends LightningElement {

    @track name=NAME_FIELD;
    @track industry=INDUSTRY_FIELD;
    @track phone=PHONE_FIELD;

    rec ={
        Name:this.name,
        Industry:this.industry,
        Phone:this.phone
    }
    handleNameChange(event){
        this.rec.Name = event.target.value;
        console.log('name1',this.rec.Name);
    }
    handlePhoneChange(event){
        this.rec.Phone = event.target.value;
        console.log('phone1',this.rec.Phone);
    }
    handleIndustryChange(event){
        this.rec.Name = event.target.value;
        console.log('Industry1',this.rec.Industry);
    }
    
    
}