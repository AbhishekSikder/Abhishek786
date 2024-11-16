import { LightningElement, api,wire } from 'lwc';
import { getObjectInfo, getPicklistValues } from "lightning/uiObjectInfoApi";
import CUSTOM_OPP from '@salesforce/schema/opportunity__c';
import STAGE_NAME from '@salesforce/schema/opportunity__c.Stage__c';
import createOp from '@salesforce/apex/CustomOpportunityCreate.createOp';
import { NavigationMixin } from 'lightning/navigation' ;
export default class CreateOpUnderConAndAcc extends NavigationMixin(LightningElement) {
    @api accountRecordId;
    opname=''
    date
    opRecordTypeId;
    options;
    @wire(getObjectInfo,{objectApiName:CUSTOM_OPP})
    results({error,data}){
        if(data){
            this.opRecordTypeId=data.defaultRecordTypeId;
        }else if(error){
            this.error=error;
            this.opRecordTypeId=undefined;
        }
    }
    @wire(getPicklistValues,{recordTypeId:"$opRecordTypeId",fieldApiName:STAGE_NAME})
    picklistResults({ error, data }) {
        if (data) {
          this.options = data.values;
          this.error = undefined;
        } else if (error) {
          this.error = error;
          this.options = undefined;
        }
      }

    handleChange(event){
        this.value = event.detail.value;
    }
    handleNameChange(event){
        this.opname=event.target.value
    }
    handleCloseDate(event){
        this.date=event.target.value
    }
    handleSave(event){
        createOp({name:this.opname,stageName:this.value,closeddate:this.date,accountid:this.accountRecordId}).then(result=>{
            console.log('Opportunity created successfully'+result)
            this[NavigationMixin.Navigate]({
                type: 'standard__recordPage',
                attributes: {
                    recordId: this.accountRecordId,
                    actionName: 'view'
                }
            });
        }

        )
        .catch( error=>{
            console.error('Error creating contact: ' + error);
        }

        );
    }

}