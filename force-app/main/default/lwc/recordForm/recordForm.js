import { LightningElement } from 'lwc';
import Last_Name from '@salesforce/schema/Contact.LastName';
import Lead_Source from '@salesforce/schema/Contact.LeadSource';
export default class RecordForm extends LightningElement {

    fields = [Last_Name,Lead_Source];
    handleSuccess(event) {
        const evt = new ShowToastEvent({
            title: 'Contact created',
            message: 'Record ID: ' + event.detail.id,
            variant: 'success',
        });
        this.dispatchEvent(evt);
    }

}