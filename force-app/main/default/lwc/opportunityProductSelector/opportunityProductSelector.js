// opportunityProductSelector.js
import { LightningElement, api, wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { updateRecord } from 'lightning/uiRecordApi';

import OPPORTUNITY_ID_FIELD from '@salesforce/schema/Opportunity.Id';
import OPPORTUNITY_PRODUCTS from '@salesforce/apex/OpportunityProductSelectorController.getOpportunityProducts';
import OPPORTUNITY_LINE_ITEM_OBJECT from '@salesforce/schema/OpportunityLineItem';

const COLUMNS = [
    { label: 'Product Name', fieldName: 'Product2.Name', type: 'text' },
    { label: 'Description', fieldName: 'Product2.Description', type: 'text' }
    // Add more columns as needed
];

export default class OpportunityProductSelector extends LightningElement {
    @api recordId; // Opportunity Id passed from parent (record page)

    products;
    columns = COLUMNS;
    selectedRows = [];

    @wire(getRecord, { recordId: '$recordId', fields: [OPPORTUNITY_ID_FIELD] })
    opportunity;

    @wire(OPPORTUNITY_PRODUCTS, { opportunityId: '$recordId' })
    wiredProducts({ error, data }) {
        if (data) {
            this.products = data;
        } else if (error) {
            console.error('Error fetching products:', error);
        }
    }

    handleRowSelection(event) {
        this.selectedRows = event.detail.selectedRows;
    }

    handleAddProducts() {
        if (this.selectedRows.length === 0) {
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Error',
                    message: 'Please select at least one product.',
                    variant: 'error'
                })
            );
            return;
        }

        const opportunityLineItems = this.selectedRows.map(row => ({
            sobjectType: OPPORTUNITY_LINE_ITEM_OBJECT.objectApiName,
            OpportunityId: this.recordId,
            Product2Id: row.Product2Id, // Adjust based on your schema
            Quantity: 1, // Example, adjust as needed
            // Add more fields as needed
        }));

        // Example: Update Opportunity with selected products (not complete implementation)
         updateRecord({ fields: { Id: this.recordId, OpportunityLineItems: opportunityLineItems } });
    }
}