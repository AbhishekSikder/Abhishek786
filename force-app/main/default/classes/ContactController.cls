public class ContactController {
	@AuraEnabled(cacheable=false)
    public static Id createContact(String name, Id accountid) {
        // Create an Account object
        Contact c =new Contact();
        c.lastname=name;
        c.AccountId=accountid;
        // Insert the Account record
        try {
            insert c;
            // Return the Id of the newly created Account record
            return c.Id;
        } catch(Exception ex) {
            // Handle any exceptions here
            throw new AuraHandledException('Error creating contact: ' + ex.getMessage());
        }
    }
}