import { LightningElement } from 'lwc';
import SAMPLEMC from '@salesforce/messageChannel/SampleMessageChannel__c';
import {APPLICATION_SCOPE,publish,subscribe,unsubscribe,MessageContext} from 'lightning/messageService';
export default class LMSA extends LightningElement {}