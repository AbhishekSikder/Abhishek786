public class Updatestage {
    public static void us(List<Opportunity>olist){
        List<Opportunity>requiredoplist=new List<Opportunity>();
        for(Opportunity o:olist){
            if(o.Probability>=70 && o.StageName!='Closed Won'){
                requiredoplist.add(o);
            }
        }
        set<id>accountidlist=new Set<id>();
        for(Opportunity o:requiredoplist){
            accountidlist.add(o.accountid);
            
        }
        
       List<Account>alist=[select id from Account where id in:accountidlist and CloseOp__c=true];
         for(Opportunity o:requiredoplist){
             for(Account a:alist){
                 if(o.accountid==A.id){
                     o.StageName='Closed Won';
                 }
             }
            
        }
        
    }
}