public class ProductClass {
    
    @AuraEnabled(cacheable=true)
    public static List<Productc__c> getProducts() {
        List<Productc__c> plist = [SELECT Id, Name, Quantity__c, Unit_Price__c FROM Productc__c];
        
        for (Productc__c p : plist) {
            system.debug(p);
        }
        
        return plist;
    }
    @AuraEnabled
    public static void SelectedProducts(Id opportunityid, String selectedproductid) {
        List<CustomOli__c> olist = new List<CustomOli__c>();
		String[] idlist     = selectedproductid.split(',');
        
        system.debug('Opportunity Id: ' + opportunityid);
        system.debug('Selected Product Ids: ' + idlist);
        
        for (String productId : idlist) {
            CustomOli__c oli = new CustomOli__c();
            oli.Customopportunity__c = opportunityid;
            oli.Productc__c = productId;
            olist.add(oli);
        }
        
        try {
            insert olist;
        } catch (DmlException e) {
            // Handle DML exceptions
            system.debug('Error inserting CustomOli__c records: ' + e.getMessage());
            throw e; // Optionally rethrow the exception for LWC to handle
        }
    }
}