public with sharing class AccountController {
    
    @AuraEnabled(cacheable=false)
    public static Id createAccount(String name, String phone, String industry, String rating) {
        // Create an Account object
        Account acc = new Account();
        acc.Name = name;
        acc.Phone = phone;
        acc.Industry = industry;
        acc.Rating = rating;
        
        // Insert the Account record
        try {
            insert acc;
            // Return the Id of the newly created Account record
            return acc.Id;
        } catch(Exception ex) {
            // Handle any exceptions here
            throw new AuraHandledException('Error creating account: ' + ex.getMessage());
        }
    }
}