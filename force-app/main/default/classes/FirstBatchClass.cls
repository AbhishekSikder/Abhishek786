global class FirstBatchClass implements Database.Batchable<sobject>{
    
    global Database.QueryLocator start(Database.batchableContext bc){
        return Database.getQueryLocator('Select id,annualrevenue from Account');
    }
    global void execute (Database.BatchableContext bc, List<sobject>scope){
        List<Account>acclist=(List<Account>)scope;
        for(Account acc:acclist){
            if(acc.annualRevenue==null){
                acc.annualrevenue=50;
            }
            else
            {
                acc.annualrevenue+=50;
            }
        }
        update acclist;
    }
    global void finish (Database.BatchableContext bc){
        system.debug('Records are processed successfully');
    }

}