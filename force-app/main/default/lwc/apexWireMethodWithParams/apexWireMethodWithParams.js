import { LightningElement, wire } from "lwc";
// Import the getOpportunities method from the OpportunityController Apex class
import getOpportunities from "@salesforce/apex/OpportunityController.getOpportunities";
/** The delay used when debouncing event handlers before invoking Apex. */
const DELAY = 300;
// Declare the ApexWireMethodWithParams class as the default export
export default class ApexWireMethodWithParams extends LightningElement {
    // Defining class properties
    opportunities;
    error;
    searchAmount = "";
    searchStage;
    // Defining the stage options as an array of objects
    stageOptions = [
        { label: "---None---", value: "" },
        { label: "Prospecting", value: "Prospecting" },
        { label: "Qualification", value: "Qualification" },
        { label: "Value Proposition", value: "Value Proposition" },
        { label: "Closed Won", value: "Closed Won" },
        { label: "Closed Lost", value: "Closed Lost" }
    ];
    //using the @wire decorator to connect to the getOpportunities Apex method
    @wire(getOpportunities, { stage: "$searchStage", amount: "$searchAmount" })
    /**
     * wiredOpportunities method is used to handle the 
       data returned from the Apex method.
     * It assigns the data to the opportunities property.
     * It also assigns the error to error property in case of error.
     * @param {Object} data - data returned from the Apex method
     * @param {Object} error - error returned from the Apex method
     */
    wiredOpportunities({ error, data }) {
        if (data) {
            this.opportunities = data;
            this.error = undefined;
            console.log(data.stage+'and'+ data.amount)
        } else if (error) {
            this.error = error;
            this.opportunities = undefined;
        }
    }
    /**
      * handleKeyChange method is used to handle the change of amount field
        and debouncing it to avoid a large number of Apex method calls.
      * It assigns the searchAmount property to user entered opportunity amount value.
      * @param {Object} event - event data
      */
    handleKeyChange(event) {
        // Debouncing this method: Do not update the reactive property as long as this function is
        // being called within a delay of DELAY. This is to avoid a very large number of Apex method calls.
        window.clearTimeout(this.delayTimeout);
        const searchAmount = event.target.value;
        // eslint-disable-next-line @lwc/lwc/no-async-operation
        this.delayTimeout = setTimeout(() => {
            this.searchAmount = searchAmount;
        }, DELAY);
    }
    /**
     * hasOpps method is used to return boolean true or false, 
       if opportunites properties has data or not.
     * @return boolean true or false
     */
    get hasOpps() {
        return this.opportunities && this.opportunities.length > 0;
    }
    /**
     * handleStageChange method is used to handle the change event of stage field.
     * It assigns the searchStage property to user selected opportunity stage value.
     * @param {Object} event - event data
     */
    handleStageChange(event) {
        this.searchStage = event.detail.value;
    }
}