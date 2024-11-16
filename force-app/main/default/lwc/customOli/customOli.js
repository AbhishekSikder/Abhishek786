import { LightningElement,wire,api } from 'lwc';
import getProducts from "@salesforce/apex/ProductClass.getProducts";
import SelectedProducts from '@salesforce/apex/ProductClass.SelectedProducts';
import getOpportunities from "@salesforce/apex/OpportunityController.getOpportunities";
import CAR_RECORDID_MESSAGE from '@salesforce/messageChannel/CarselectedMessageChannel__c';
import OPPORTUNITY_MESSAGE_CHANNEL from '@salesforce/messageChannel/OpportunityMessageChannel__c';
import { publish,subscribe,MessageContext } from 'lightning/messageService';
import { NavigationMixin } from 'lightning/navigation';
import id from '@salesforce/user/Id';
const columns = [
    { label: 'Productname', fieldName: 'Name',type: 'text'},
    { label: 'Price', fieldName: 'Quantity', type: 'Number' },
    { label: 'Quantity', fieldName: 'phone', type: 'Number' }
    
];

export default class CustomOli extends NavigationMixin(LightningElement) {

    @wire(MessageContext) messageContext

     idlist=new Set()
    @api recordId;
    
    arr=[]
    columns=columns;
    prodlist;
    error;
    @wire(getProducts)
    Method({error,data}){
        if(data){
            this.prodlist=data;
            this.error=undefined;
        }
        else
        {
            this.error=error;
            this.data=undefined;
        }
    }

    handleclick(event){
       /* var el = this.template.querySelector('lightning-datatable');
        

        console.log(el);
        var selected = el.getSelectedRows();
        console.log('Selected Rows:', selected);
       // selectedidlist=selected.map(row => row.Id);
       // console.log(selected[0].Id)

       let selectedIds = selected.map(row => row.Id);
       console.log(selectedIds)
        /*for(let i=0;i<selected.length;i++){
            this.idlist.add(selected[i].Id)
            this.arr.push(selected[i].Id)
        }
        
        SelectedProducts({opportunityid:this.recordId,selectedproductid:this.selectedIds})
        .then( result=>{
            console.log('Products added successfully'+result)
            
            
            
        }

        )
        .catch( error=>{
            console.log('Error catching Products'+error)
        }

        );
        */
       console.log(this.recordId)
        var el = this.template.querySelector('lightning-datatable');
        var selected = el.getSelectedRows();

        console.log('Selected Rows:', selected);

        // Prepare selected product Ids
        let selectedIds = selected.map(row => row.Id);

        console.log('Selected Ids:', selectedIds);

        let ids = '';
          selected.forEach(currentItem => {
              ids = ids + ',' + currentItem.Id;
          });
          this.selectedIds = ids.replace(/^,/, '');
          this.lstSelectedRecords = selected;
          alert(this.selectedIds);
          alert(typeof(this.selectedIds)) 
          alert(recordId) 
          alert(typeof(this.recordId)) 
       SelectedProducts({ opportunityid: this.recordId, selectedproductid: this.selectedIds })
            .then(result => {
                if (result) {
                    console.log('Products added successfully:', result);
                    // Handle success result as needed
                } else {
                    console.error('Apex method returned null or undefined');
                }
            })
            .catch(error => {
                console.error('Error catching Products:', error);
                // Handle error as needed
            });
    }
        handleSendData(){
            publish(this.messageContext,OPPORTUNITY_MESSAGE_CHANNEL,{oid:this.recordId})
            console.log('Published Opportunity record id')
            this[NavigationMixin.Navigate]({
                type: 'standard__navItemPage',
                attributes: {
                    //Name of any CustomTab. Visualforce tabs, web tabs, Lightning Pages, and Lightning Component tabs
                    apiName: 'Car_Explorer'
                },
            });
        }

}