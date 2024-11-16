public class CustomOpportunityHandler {
    public static void createQuote(List<opportunity__c> olist){
        List<Quote__c> qlist = new list<Quote__c>();
        
        // when opportunity clsoedate becomes equal to todays date then quote shall be created
      //  olist=[select id,Name, Amount__c from opportunity__c where Closedate__c=TODAY];
        
        for (opportunity__c o: olist){
            if(o.Closedate__c==date.TODAY()){
                Quote__c q = new Quote__c();
                q.Name=o.name+'quote';
           	 q.Customopportunity__c=o.id;
                qlist.add(q);
            }
            
        }
        insert qlist;
        
    }

}