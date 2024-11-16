public class Batchp3 implements Database.Batchable<sobject> {
	
    public Database.queryLocator start (Database.BatchableContext BC){
        
        return Database.getQueryLocator('select id,name from account');
    }
    public void execute(Database.BatchableContext Bc, List<sobject>obj){
        
    }
    public void finish(Database.BatchableContext Bc){
        
    }
}