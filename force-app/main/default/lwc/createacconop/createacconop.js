import { LightningElement,api} from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
import createac from '@salesforce/apex/AccountCreation.createac';
import LAST_NAME from '@salesforce/schema/Contact.LastName';
import LeadSource from '@salesforce/schema/Contact.LeadSource';
import createAccount from '@salesforce/apex/AccountController.createAccount';

import { NavigationMixin } from 'lightning/navigation' ;
export default class Createacconop extends NavigationMixin(LightningElement) {

    name='';
    nameb='Primitive variable';
    displayAccount=true
    displaycontact=false;
    displayopportunity=false;
    errormessage=''
    Accountname=""
    accountid='001J4000004UGTKIA4'
    listofnames={
        label:"Subham", value:"beginner"
    }

    phone;
    rating;
    industry;
    handleNameChange(event){
        this.name=event.target.value;
        

    }
    handlePhoneChange(event){
        this.phone=event.target.value;

    }
    handleIndustryChange(event){
        this.industry=event.target.value;
    }
    handleRatingChange(event){
        this.Rating=event.target.value;
    }
      
    handleClick(){
        createAccount({ 
            name: this.name,
            phone: this.phone,
            industry: this.industry,
            rating: this.rating 
        })
        .then(result => {
            // Result will contain the newly created record's Id
            console.log('Account added successfully with Id: ' + result);
            // Optionally, you can perform other actions with the Id, such as navigating to the record page
            this.accountid=result
            
            console.log('id of record'+this.accountid)
            // Reset input fields after successful creation
            this.name = '';
            this.phone = '';
            this.industry = '';
            this.rating = '';
        })
        .catch(error => {
            console.error('Error creating account: ' + error);
            // Handle error appropriately
        });
            this.displaycontact=true
            this.displayAccount=false
            this.Accountname=this.name
        }
        
        
    }