import { LightningElement,api} from 'lwc';
import createContact from '@salesforce/apex/ContactController.createContact';

export default class CreateContactUnderAccount extends LightningElement {
@api accountid
aid
contactnotcreated=true
contactid=''
lastname=''
displayopfields=false
value = ''
handleContactLNameChange(event){
    this.lastname=event.target.value
}
handleSave(){
    createContact({name:this.lastname,accountid:this.accountid}) .then(result => {
        // Result will contain the newly created record's Id
        console.log('Contact added successfully with Id: ' + result);
        // Optionally, you can perform other actions with the Id, such as navigating to the record page
        this.contactid=result
        
        console.log('id of record'+this.contactid)
        // Reset input fields after successful creation
        this.lastname = '';
        
        
    })
    .catch(error => {
        console.error('Error creating contact: ' + error);
        // Handle error appropriately
    });
    this.displayopfields=true
    this.contactnotcreated=false
    this.aid=this.accountid
}


}