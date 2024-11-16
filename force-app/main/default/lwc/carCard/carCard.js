import { LightningElement,wire } from 'lwc';
import { getObjectInfo, getPicklistValues } from 'lightning/uiObjectInfoApi';
import {getRecord, getFieldValue } from 'lightning/uiRecordApi';
import CAR_OBJECT from '@salesforce/schema/Car__c';
import CATEGORY_FIELD from '@salesforce/schema/Car__c.Category__c';
import MAKE_FIELD from '@salesforce/schema/Car__c.Make__c';
import NAME_FIELD from '@salesforce/schema/Car__c.Name';
import CONTROL_FIELD from '@salesforce/schema/Car__c.Control__c';
import DESCRIPTION_FIELD from '@salesforce/schema/Car__c.Description__c';
import FUEL_FIELD from '@salesforce/schema/Car__c.Fuel_Type__c';
import MSRP_FIELD from '@salesforce/schema/Car__c.MSRP__c';
import NUMBER_OF_SEATS from '@salesforce/schema/Car__c.Number_of_Seats__c';
import PICTURE_FIELD from '@salesforce/schema/Car__c.Picture_URL__c';
import OPPORTUNITY_MESSAGE_CHANNEL from '@salesforce/messageChannel/OpportunityMessageChannel__c';
import CAR_RECORDID_MESSAGE from '@salesforce/messageChannel/CarselectedMessageChannel__c';
/** Import Publish method and messagecontext */
import { publish,subscribe,MessageContext,unsubscribe,APPLICATION_SCOPE } from 'lightning/messageService';
const fields=[PICTURE_FIELD]
export default class CarCard extends LightningElement {
    recordId='a0OJ40000005EmoMAE'
    carname
    carpicurl
    category=CATEGORY_FIELD
    make=MAKE_FIELD
    control=CONTROL_FIELD
    description=DESCRIPTION_FIELD
    fuel=FUEL_FIELD
    mspr=MSRP_FIELD
    numberofseat=NUMBER_OF_SEATS
    picture=PICTURE_FIELD

    /** get MessageContext i.e which LWC is using the lightning message Channel named CAR_RECORDID_MESSAGE which is the name  imported from mc CarselectedMessageChannel__c  */

    subscription1 = null;
    subscription2 = null;
   
   
    @wire(MessageContext) messageContext


    @wire(getRecord,{recordId:'$recordId',fields})
    func({error,data}){
        if(data){
            this.carpicurl=getFieldValue(data,PICTURE_FIELD)
        }
        else if(error){
            this.carpicurl=''
        }
    }
    
    handleRecordLoad(event){
        const {records}=event.detail
        const recordData=records[this.recordId]
       this.carname= getFieldValue(this.recordData,NAME_FIELD)
       //this.carpicurl= getFieldValue(this.recordData,PICTURE_FIELD)
        
    }
    /*constructor(){
        super()
        this.subscribeOphandler()
        console.log('After subscribeOphandler if u see then this func was called')
    }*/
    connectedCallback(){
        
        this.subscribeHandler()
        console.log('After subscribeHandler')
        this.subscribeOphandler()
        console.log('After subscribeOphandler if u see then this func was called')
        
    }
    subscribeHandler(){
        this.subscription1 = subscribe(this.messageContext, CAR_RECORDID_MESSAGE, (message) => this.handlegetrecord(message));
       // subscribe(this.messageContext,CAR_RECORDID_MESSAGE,(message)=this.handlegetrecord(message))
        //subscribe(this.messageContext,CAR_FILTERED_MESSAGE,(message)=>this.handleFilterChanges(message))
    }
    /*subscribeOphandler(){
        subscribe(this.messageContext, OPPORTUNITY_MESSAGE_CHANNEL, (message) => this.handlegetOpRecord(message));
    }*/
        subscribeOphandler() {
           // this.subscription2 = subscribe(this.messageContext, OPPORTUNITY_MESSAGE_CHANNEL, (message) => this.handlegetOpRecord(message));
           try {
            this.subscription2 = subscribe(this.messageContext, OPPORTUNITY_MESSAGE_CHANNEL, (oid) => {
                this.handlegetOpRecord(oid);
            },{ scope: APPLICATION_SCOPE });
        } catch (error) {
            console.error('Error subscribing to OPPORTUNITY_MESSAGE_CHANNEL:', error);
        }
        }

    /*handlegetrecord(message){
        console.log(message.recordidv)
    }*/
        handlegetrecord(message) {
            if (message && message.recordidv) {
                console.log('Received Message:', message);
                console.log('Record ID:', message.recordidv);
                // Handle the received record ID as needed
                this.recordId=message.recordidv 
                // line 73 new change
                
            } else {
                console.error('Invalid message format:', message);
            }
        }

       /* handlegetOpRecord(message){
            if(message){
                console.log('OP Record ID:', message.oid);
            }
            else{
                console.error('Invalid message format:', message);
            }
            
        }*/
            handlegetOpRecord(message) {
                if (message && message.oid) {
                    console.log('Opportunity Record ID:', message.oid);
                    // Handle the received Opportunity record ID as needed
                } else {
                    console.error('Invalid message format:', message);
                }
            }
            disconnectedCallback() {
                if (this.subscription1) {
                    this.subscription1 = unsubscribe(this.subscription1);
                }
                if (this.subscription2) {
                    this.subscription2 = unsubscribe(this.subscription2);
                }
            }

            CaptureValues(event){
                const vl=this.template.querySelectorAll('lightning-output-field')
                vl.forEach(v=>{
                    console.log(v.fieldName+','+v.outerText)
                })
            }

}