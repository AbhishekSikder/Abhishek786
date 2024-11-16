/*
 * This class is used as an controller class for apexImperativeMethodWithParams LWC.
 */
public with sharing class OpportunityController2 {
    /**************************************************************************************
    * @Description : The getOpportunities returns a list of Opportunity objects,
    *                based on the user selected stage and amount.
    * @Param	   : CustomWrapper - wrapper object
    * @Return      : List<Opportunity> opportunities
    **************************************************************************************/
    @AuraEnabled
    public static List<Opportunity> getOpportunities(CustomWrapper wrapper) {
        List<Opportunity> opportunities = new List<Opportunity>();
        if(String.isNotEmpty(wrapper.someString) && String.isNotEmpty(wrapper.someInteger)){
            Integer amt = Integer.valueOf(wrapper.someInteger);
            opportunities = [SELECT Id, Name, StageName, Amount, CloseDate 
                                    FROM Opportunity 
                                    WHERE StageName=: wrapper.someString 
                                    AND Amount >= :amt
                                    WITH SECURITY_ENFORCED];
        }        
        return opportunities;
    }
    /**
     * Wrapper class used to demonstrate how we can pass complex paramters from LWC.
     * Note that inner classes are not supported when exchanging with LWC.
     */
    public with sharing class CustomWrapper {
        @AuraEnabled
        public string someInteger { get; set; }
        @AuraEnabled
        public String someString { get; set; }
    }
}