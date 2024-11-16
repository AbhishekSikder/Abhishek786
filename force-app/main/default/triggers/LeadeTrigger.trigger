trigger LeadeTrigger on Lead (after insert) {
    if(Trigger.isinsert && Trigger.isAfter){
        LeadeTriggerHandler.SendEmailtoNewLead(trigger.new);
    }
}