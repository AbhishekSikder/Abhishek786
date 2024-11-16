import { LightningElement,wire } from 'lwc';
import getCarValues from '@salesforce/apex/CarController.getCarValues';
/**Importing Message Channel */
import CAR_FILTERED_MESSAGE from '@salesforce/messageChannel/SampleMessageChannel__c';
import CAR_RECORDID_MESSAGE from '@salesforce/messageChannel/CarselectedMessageChannel__c';

/** Import Publish method and messagecontext */
import { publish,subscribe,MessageContext } from 'lightning/messageService';
export default class CarTileList extends LightningElement {
    recordidvalue
    car
    carfetched=false
    filter={}
    @wire(getCarValues,{filter:'$filter'})
    carmethod({error,data}){
        if(data){
            this.car=data
            console.log(data)
            this.carfetched=true
        }
        else if(error){
            console.log(error)
        }
    }

    @wire(MessageContext)messageContext

    connectedCallback(){
        this.subscribeHandler()
    }

    subscribeHandler(){

    subscribe(this.messageContext,CAR_FILTERED_MESSAGE,(message)=>this.handleFilterChanges(message))
    }

    handleFilterChanges(message){
        console.log(message.filters)
        this.filter={...message.filters}
        console.log(this.filter)
    }
    handlerecordid(event){
        this.recordidvalue=event.detail
        console.log(this.recordidvalue)
        publish(this.messageContext,CAR_RECORDID_MESSAGE,{recordidv:this.recordidvalue})
        //publish(this.messageContext,CAR_FILTERED_MESSAGE,{filters:this.filters})
        console.log('Published the record id')
    }

}