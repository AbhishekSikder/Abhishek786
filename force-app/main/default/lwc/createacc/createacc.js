import { LightningElement,api,track } from 'lwc';
import { showToastEvent } from 'lightning/platformShowToastEvent';
import create from '@salesforce/apex/AccountCreation2.create';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import NAME_FIELD from '@salesforce/schema/Account.Name';

export default class Createacc extends LightningElement {

    accountIdToBeShown;
    handleSuccess(event) {
        console.log(event.detail.id);
        this.accountIdToBeShown = event.detail.id;
    }
}