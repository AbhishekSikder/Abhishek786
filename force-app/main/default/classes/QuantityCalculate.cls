public class QuantityCalculate {
    public static void qc(List<SalesOrderLineItem__c>slist){
        Map<id,SalesOrderLineItem__c>smap=new Map<id,SalesOrderLineItem__c>();
        Map<id,QuoteLineItem__c>qmap=new Map<id,QuoteLineItem__c>();
        set<id>sset=new set<id>();
        for(SalesOrderLineItem__c s:slist){
            smap.put(s.id,s);
            sset.add(s.id);
        }
		List<SalesOrderLineItem__c>sc  =[select id,QuoteLineItem__r.id  from SalesOrderLineItem__c ]; 
        set<id>qlid=new set<id>();
        
        for(SalesOrderLineItem__c s: sc){
            
             qmap.put(s.QuoteLineItem__r.id, (s.QuoteLineItem__r));
            qlid.add(s.QuoteLineItem__r.id);
        }
        
        for (SalesOrderLineItem__c s : slist) {
    if (qmap.containsKey(s.QuoteLineItem__r.Id)) {
        QuoteLineItem__c quoteLineItem = qmap.get(s.QuoteLineItem__r.Id);
        quoteLineItem.Quantity__c = quoteLineItem.Quantity__c - s.Quantity__c;
        qmap.put(s.QuoteLineItem__r.Id, quoteLineItem);
    }
            List<QuoteLineItem__c>qlist=[select id,Quantity__c from QuoteLineItem__c where id in : qlid];
            
}

    }
}