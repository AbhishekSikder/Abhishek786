trigger AccChange on Account (after insert,after update,before update) {
    if(Trigger.isAfter &&Trigger.isUpdate)
    {
        
        Ac2TriggerHandler.updatecontactsname(trigger.New);
        Ac2TriggerHandler.countOfActiveContact(trigger.New);
    }
    if(Trigger.isAfter &&Trigger.isInsert){
        Ac2TriggerHandler.countOfActiveContact(trigger.New);
    }
    if(Trigger.isBefore &&Trigger.isUpdate){
        SendEmailtoOwner.sendemail(trigger.oldMap,trigger.new);
    }
}