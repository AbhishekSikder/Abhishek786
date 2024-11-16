import { LightningElement } from 'lwc';
import getOpportunities from "@salesforce/apex/OpportunityController.getOpportunities";
export default class Practisewirevsimperative extends LightningElement {
    opportunities;
    error;
    searchAmount = "2500";
    searchStage="Prospecting";
    stageOptions = [
        { label: "---None---", value: "" },
        { label: "Prospecting", value: "Prospecting" },
        { label: "Qualification", value: "Qualification" },
        { label: "Value Proposition", value: "Value Proposition" },
        { label: "Closed Won", value: "Closed Won" },
        { label: "Closed Lost", value: "Closed Lost" }
    ];

    handleAmountChange(event) {
        this.searchAmount = event.target.value;
      }
      /**
       * handleStageChange method is used to handle the change event of stage field.
       * It assigns the searchStage property to user selected opportunity stage value.
       * @param {Object} event - event data
       */
      handleStageChange(event) {
        this.searchStage = event.detail.value;
      }
      fetchdata(){
        getOpportunities({stage:this.searchStage, amount:this.searchAmount})
        .then((result) => {
            this.opportunities = result;
            this.error = undefined;
          })
          .catch((error) => {
            this.opportunities = undefined;
            this.error = error;
          });
      }
      get hasOpps() {
        return this.opportunities && this.opportunities.length > 0;
      }
      connectedCallback() {
        this.fetchdata();
     }
    
      
}