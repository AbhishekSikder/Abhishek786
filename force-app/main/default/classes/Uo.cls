public class Uo {
    public static void updateOpportunity(List<Account>alist){
        set<id>acidl=new Set<id>();
        
        for(Account a : alist){
            if(a.CloseOp__c==true){
                acidl.add(a.id);
            }
                
            
            
        }
        List<Opportunity> ol =new List<Opportunity>();
        ol=[select id, StageName,Probability from Opportunity where accountid in:acidl];
        for(Opportunity o : ol){
            if(o.probability>=70){
                o.StageName='Closed Won';
                System.debug('Opportunity updated');
            }
        }
        update ol;
        
        
    }
}