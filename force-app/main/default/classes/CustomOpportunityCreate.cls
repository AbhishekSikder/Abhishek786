public class CustomOpportunityCreate {
    
	@AuraEnabled(cacheable=false)
    public static Id createOp(String name,String stageName, Date closeddate, Id accountid) {
        // Create an opp object
        opportunity__c o=new opportunity__c();
        o.Name=name;
        o.Closedate__c=closeddate;
        o.Account__c=accountid;
        o.Stage__c=stageName;
        
        // Insert the opp record
        try {
            insert o;
            // Return the Id of the newly created Account record
            return o.Id;
        } catch(Exception ex) {
            // Handle any exceptions here
            throw new AuraHandledException('Error creating Opportunity: ' + ex.getMessage());
        }
    }


}