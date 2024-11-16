public class Lipdf {
    public string oppid{get;set;}
   
    public List<OpportunityLineItem__c>ilist {get;set;}
    public Opportunity o{get;set;}
    
    public Lipdf(){
        oppid=ApexPages.currentpage().getParameters().get('id');
        ilist=[select Unit_Price__c,Quantity__c from OpportunityLineItem__c where Opportunity__c=:oppid];
    }
      public void print(){
        system.debug(ilist);
    }
}