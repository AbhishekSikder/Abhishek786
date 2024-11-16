import { LightningElement,wire } from 'lwc';
import getleads from '@salesforce/apex/LeadClass.getLeads';
import getOpportunities from "@salesforce/apex/OpportunityController.getOpportunities";
export default class RealTimeLeadView extends LightningElement {
    leadlist;
    leadsource="Purchased List";
    leadstatus="Working - Contacted";
    error;
    Leadstatuslist = [
        { label: "---None---", value: "" },
        { label: "Open - Not Contacted", value: "Open - Not Contacted" },
        { label: "Working - Contacted", value: "Working - Contacted" },
        { label: "Closed - Converted", value: "Closed - Converted" },
        { label: "Closed - Not Converted", value: "Closed - Not Converted" }
        
    ];
    Leadsourcelist = [
        { label: "other", value: "other" },
        { label: "Web", value: "Web" },
        { label: "Phone Inquiry", value: "Phone Inquiry" },
        { label: "Partner Referral", value: "Partner Referral" },
        { label: "Purchased List", value: "Purchased List" }
        
    ];

    
   // @wire(getOpportunities, { stage: "$searchStage", amount: "$searchAmount" })
   //wiredOpportunities({ error, data })
    @wire(getleads,{leadsource:"$leadsource",leadstatus:"$leadstatus"})
    wiredLeads({error, data}){
        console.log('Inside Lead function')
        if(data){
            this.leadlist=data;
            this.error = undefined;
            console.log('Received data')
        }
        else if(error){
            this.leadlist=undefined;
            this.error = error;
            console.log(error)
        }
    }
    handleLeadsource(event){
        this.leadsource=event.detail.value;
        console.log(this.leadsource)
    }
    handleLeadstatus(event){
        this.leadstatus=event.detail.value;
     
        console.log(this.leadstatus);
    }

    get hasLeads() {
        return this.leadlist && this.leadlist.length > 0;
    }
}