trigger Phoneno on Contact (before insert) {
    if(Trigger.isInsert){
        if(Trigger.isBefore){
            ContactHandlerphone.getPhone(Trigger.New);
        }
    }
    
}