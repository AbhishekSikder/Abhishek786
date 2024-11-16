import { LightningElement,api } from 'lwc';
import Name from '@salesforce/schema/Account.Name';
import Industry from '@salesforce/schema/Account.Industry';
import Rating from '@salesforce/schema/Account.Rating';
import Phone from '@salesforce/schema/Account.Phone';
export default class Editableandnoneditablefield extends LightningElement {
    accountId;
    handleSuccess(event) {
        this.accountId = event.detail.id;
    }

}