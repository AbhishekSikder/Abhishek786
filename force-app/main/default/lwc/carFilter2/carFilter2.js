import { LightningElement, wire, track } from 'lwc';
import { getObjectInfo, getPicklistValues } from 'lightning/uiObjectInfoApi';
import CAR_OBJECT from '@salesforce/schema/Car__c';
import CATEGORY_FIELD from '@salesforce/schema/Car__c.Category__c';
import MAKE_FIELD from '@salesforce/schema/Car__c.Make__c';

/**Importing Message Channel */
import CAR_FILTERED_MESSAGE from '@salesforce/messageChannel/SampleMessageChannel__c';
/** Import Publish method and messagecontext */
import { publish,MessageContext } from 'lightning/messageService';

const CATEGORY_ERROR = 'Error Loading Categories';
const MAKE_ERROR = 'Error Loading Make';

export default class CarFilter2 extends LightningElement {
    @track value = [];
    @track valueb = [];
    @track categories;
    @track makeType;
    carObjectInfo;

    @track filters = {
        searchkey: '',
        maxPrice: 999999
    };


    /** getMessageContext i.e all the LWCs that are using this message channel */

    @wire(MessageContext)messageContext


    @wire(getObjectInfo, { objectApiName: CAR_OBJECT })
    carfunc({ error, data }) {
        if (data) {
            this.carObjectInfo = data.defaultRecordTypeId;
            console.log('Object Info:', this.carObjectInfo);
        } else if (error) {
            this.carObjectInfo = undefined;
            console.error('Object Info Error:', error);
        }
    }

    @wire(getPicklistValues, {
        recordTypeId: '$carObjectInfo',
        fieldApiName: CATEGORY_FIELD
    })
    categoriesfunc({ error, data }) {
        if (data) {
            this.categories = data;
            this.error = undefined;
            console.log('Categories:', this.categories);
        } else if (error) {
            this.categories = undefined;
            console.error('Categories Error:', error);
        }
    }

    @wire(getPicklistValues, {
        recordTypeId: '$carObjectInfo',
        fieldApiName: MAKE_FIELD
    })
    makeTypefunc({ error, data }) {
        if (data) {
            this.makeType = data;
            console.log('Make Types:', this.makeType);
        } else if (error) {
            this.makeType = undefined;
            console.error('Make Types Error:', error);
        }
    }

    handleKeyChange(event) {
        console.log(event.target.value)
        this.filters.searchkey = event.target.value;
        this.sendDataToCarList();
    }

    handleMaxPriceChange(event) {
        console.log(event.target.value)
        this.filters.maxPrice = event.target.value;
        this.sendDataToCarList();
    }

    handleChange(event) {
        this.value = event.detail.value;
        this.filters.value = event.detail.value;
        console.log('Selected Categories:', this.value);
        this.sendDataToCarList();
    }

    handleNChange(event) {
        this.valueb = event.detail.value;
        this.filters.valueb = event.detail.value;
        console.log('Selected Make Types:', this.valueb);
        this.sendDataToCarList();
    }

    sendDataToCarList(){
        publish(this.messageContext,CAR_FILTERED_MESSAGE,{filters:this.filters})
    }
}
