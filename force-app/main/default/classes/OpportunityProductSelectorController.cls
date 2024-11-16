// OpportunityProductSelectorController.cls
public with sharing class OpportunityProductSelectorController {
    @AuraEnabled(cacheable=true)
    public static List<OpportunityLineItem> getOpportunityProducts(String opportunityId) {
        return [SELECT Id, Product2.Name, Product2.Description, Product2Id FROM OpportunityLineItem WHERE OpportunityId = :opportunityId];
    }
}