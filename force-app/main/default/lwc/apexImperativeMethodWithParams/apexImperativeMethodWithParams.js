// Import the LightningElement class and the wire decorator from the lwc module
import { LightningElement } from "lwc";
import getOpportunities from "@salesforce/apex/OpportunityController2.getOpportunities";

export default class ApexImperativeMethodWithApexImperativeMethodWithParamsComplexParams extends LightningElement {
  // Defining class properties
  opportunities;
  error;
  searchAmount = "2500"; //set default search amount
  searchStage = "Prospecting"; //set default search amount
  // Defining the stage options as an array of objects
  stageOptions = [
    { label: "---None---", value: "" },
    { label: "Prospecting", value: "Prospecting" },
    { label: "Qualification", value: "Qualification" },
    { label: "Value Proposition", value: "Value Proposition" },
    { label: "Closed Won", value: "Closed Won" },
    { label: "Closed Lost", value: "Closed Lost" }
  ];
  /**
    * connectedCallback method is used to get the matching
      opportunity data on page load for searchAmount = "2500"
      and searchStage = 'Prospecting'
    */
  connectedCallback() {
    this.fetchData();
  }

  /**
   * handleAmountChange method is used to handle the change of amount field
   * It assigns the searchAmount property to user entered opportunity amount value.
   * @param {Object} event - event data
   */
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
  /**
   * fetchData method is used to handle the data returned from the getOpportunities Apex method.
   * It convert the searchStage & searchStage to an parameterObject
     and shows us an example of passing multiple params to apex
   * It assigns the data to the opportunities property.
   * It also assigns the error to error property in case of error.
   * @param {Object} event - event data
   */
  fetchData() {
    // Creating the object that represents the shape
    // of the Apex wrapper class.
    let parameterObject = {
      someString: this.searchStage,
      someInteger: this.searchAmount
    };    
    /* Calling the imperative Apex method with the JSON
    object as parameter.*/
    getOpportunities({ wrapper: parameterObject })
      .then((result) => {
        this.opportunities = result;
        this.error = undefined;
      })
      .catch((error) => {
        this.opportunities = undefined;
        this.error = error;
      });
  }
  /**
   * get hasOpps method checks whether the opportunities property is not undefined
   * and has at least one opportunity.
   * @returns {boolean} - true if opportunities exist, false otherwise
   */
  get hasOpps() {
    return this.opportunities && this.opportunities.length > 0;
  }
}