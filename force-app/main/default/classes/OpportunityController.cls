/*
 * This class is used as an controller class for apexWireMethodWithParams LWC.
 */
public with sharing class OpportunityController {
    /**************************************************************************************
    * @Description : The getOpportunities returns a list of Opportunity objects,
    *                based on the user selected stage and amount.
    * @Param	   : stage - user selected stage 
    * @Param	   : scope - user entered amount
    * @Return      : List<Opportunity> opportunities
    **************************************************************************************/
    @AuraEnabled(cacheable=true)
    public static List<Opportunity> getOpportunities(String stage, String amount) {
        List<Opportunity> opportunities = new List<Opportunity>();
        if(String.isNotEmpty(amount) && String.isNotEmpty(stage)){
            Integer amt = Integer.valueOf(amount);
            opportunities = [SELECT Id, Name, StageName, Amount, CloseDate 
                                    FROM Opportunity 
                                    WHERE StageName=: stage 
                                    AND Amount >= :amt 
                                    WITH SECURITY_ENFORCED];
        }        
        return opportunities;
    }
}