trigger QuoteCreator on opportunity__c (after insert, after update) {
    if (Trigger.isAfter){
        if(Trigger.isInsert || Trigger.isUpdate){
            CustomOpportunityHandler.createQuote(Trigger.new);
        }
    }
}