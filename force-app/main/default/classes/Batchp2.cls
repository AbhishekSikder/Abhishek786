public class Batchp2 implements Database.Batchable<sObject> {
    public Database.queryLocator start(Database.BatchableContext bc){
        String query='select id,name from Account';
        return Database.getqueryLocator(query);
    }
        
    public void execute(Database.BatchableContext bc, List<Account>aclist){
            for(Account acc:aclist){
                acc.rating='hot';
            }
            update aclist;
        }
     public void finish(Database.BatchableContext bc){
            System.debug('All accounts updated');
        }
        
    
}