public class DisplayProductName {
    public List<Productc__c> productlist {get;set;}
    public DisplayProductName(){
        productlist=[select Name,Unit_Price__c from Productc__c ];
    }
}