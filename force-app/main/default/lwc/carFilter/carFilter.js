import { LightningElement,wire,track } from 'lwc';
import { getObjectInfo,getPicklistValues } from 'lightning/uiObjectInfoApi';   
import CAR_OBJECT from '@salesforce/schema/Car__c';
import CUSTOM_OPP from '@salesforce/schema/opportunity__c';
import CATEGORY_FIELD from '@salesforce/schema/Car__c.Category__c'
import MAKE_FIELD from '@salesforce/schema/Car__c.Make__c'

const CATEGORY_ERROR='Error Loading Categories'
const MAKE_ERROR='Error Loading make type'
export default class CarFilter extends LightningElement {
    @track value=[]
    makeType
    @track valueb=[]
    categories
    carObjectInfo
    filters={
        searchkey:'',
        maxPrice:999999
    }


    /** Fetching Category values 
     * @wire(getObjectInfo,{objectApiName:CUSTOM_OPP})
     * results({error,data}){
        if(data){
            this.opRecordTypeId=data.defaultRecordTypeId;
        }else if(error){
            this.error=error;
            this.opRecordTypeId=undefined;
        }
    }
    */

    @wire(getObjectInfo,{objectApiName:CAR_OBJECT})
    carfunc({error,data}){
        if(data){
            this.carObjectInfo=data.defaultRecordTypeId;
            console.log(this.carObjectInfo)
        }
        else if(error)
        {
            this.carObjectInfo=undefined
            alert('Not getting data bro')
            console.log(error)
        }
    }

    @wire(getPicklistValues,{
        recordTypeId:'$carObjectInfo',
        fieldApiName:CATEGORY_FIELD
    })
    categoriesfunc({error,data}){
        if (data) {
            this.categories=data
            this.error=undefined
            console.log(this.categories)
        }
        else if (error) {
            this.categories=undefined
            this.error=error
            console.log(this.categories)
        } 
    }
    
    
    ce=CATEGORY_ERROR
    me=MAKE_ERROR


    /** Fetching Make values */

    @wire(getPicklistValues,{
        recordTypeId:'$carObjectInfo',
        fieldApiName:MAKE_FIELD
    })
    makeTypefunc({error,data}){
        if(data){
            this.makeType=data;
            console.log(this.makeType)
        }
        else if(error){
            this.makeType=undefined
            console.log(error)
        }
    }


    handleKeyChange(){

    }
    handleMaxPriceChnage(){

    }

    handleCheckBox(){

    }
    /**Get selected values from categories check box group */
    handleChange(event){
        this.value = event.detail.value;
        console.log(value)
    }
    get selectedValues() {
        return this.value.join(',');
    } 
    handleNChange(event){
        this.valueb = event.detail.value;
        console.log(valueb)
    }
    
}