public class DisplayQliList {
    public Quote__c Q {get;set;}
    public QuoteLineItem__c qli {get;set;}
    public  List<QuoteLineItem__c> qlilist {get;set;}
    public string quoteid{get;set;}
    public DisplayQliList(){
        quoteid= ApexPages.currentpage().getParameters().get('id');
        qlilist=[select Name from QuoteLineItem__c where Quote__c=:quoteid ];
        system.debug(quoteid);
           
    }
}