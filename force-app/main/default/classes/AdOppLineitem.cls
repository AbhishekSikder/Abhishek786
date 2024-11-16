public class AdOppLineitem {
    public List<OpportunityLineItem__c> ol{get;set;}
    public Opportunity o{get;set;}
    public OpportunityLineItem__c oc{get;set;}
    public String oppid{get;set;}
   
    public AdOppLineitem(){
        ol=new List<OpportunityLineItem__c> ();
        ol=[select Name,Unit_Price__c,Quantity__c from OpportunityLineItem__c];
        oppid=ApexPages.CurrentPage().getparameters().get('id');
    }
    public void add(){
        oc= new OpportunityLineItem__c();
        oc.Name='';
        
        ol.add(oc);
    }
    public PageReference save(){
        insert ol;
        PageReference pf =new PageReference('/'+o.id);
        return pf;
    }
    public PageReference cancel(){
        PageReference pf =new PageReference('/'+o.id);
        return pf;
    }
}