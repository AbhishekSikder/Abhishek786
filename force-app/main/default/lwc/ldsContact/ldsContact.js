import { LightningElement,api} from 'lwc';
import NAME_FIELD from '@salesforce/schema/Account.Name'
import REVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';
import Last_Name from '@salesforce/schema/Contact.LastName';
import Lead_Source from '@salesforce/schema/Contact.LeadSource';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class LdsContact extends LightningElement {

    
     
    fields = [Last_Name,Lead_Source];
    option='lds'

    property1= this.option==='lds'
    property2=this.option==='apex'


    get Options(){
        return [
            {
                label:"Create contact using LDS", value:"lds"
            },
            {label:"Create contact using Apex class", value:"apex"}
        ]
    }
    handlechange(event){
        this.option=event.target.value;
        console.log(this.option);
        this.property1= this.option==='lds'
        this.property2=this.option==='apex'
        console.log('Property1'+this.property1+'and property2'+this.property2)

    }
    handleSuccess(event) {
        const evt = new ShowToastEvent({
            title: 'Contact created',
            message: 'Record ID: ' + event.detail.id,
            variant: 'success',
        });
        this.dispatchEvent(evt);
    }
}