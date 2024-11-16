trigger Createcontact on Account (after insert,before insert, before update) {
    
    
    if(Trigger.isAfter){
        if(Trigger.isInsert){
            Th1.createc(Trigger.New);
            
        }
        if(Trigger.isUpdate){
            uo.updateOpportunity(Trigger.New);
        }
    }
    if(trigger.isBefore){
        if(trigger.isInsert || trigger.isUpdate){
            Th1.changedetail(trigger.new);
        }
        
    }
}