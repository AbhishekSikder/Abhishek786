public class LeadBatch implements Database.Batchable <sobject> {
    public Database.QueryLocator start(Database.BatchableContext bc){
        string query='select id,leadsource,status from lead where status= \'Closed - Not Converted\' and createddate<=LAST_N_MONTHS:6';
        return Database.getQueryLocator(query);
    }
    public void execute(Database.BatchableContext bc, List<Lead>l){
        delete l;
    }
    public void finish (Database.BatchableContext bc){
		LeadeTriggerHandler.SendEmailtoOwner();
    }
}