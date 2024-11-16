trigger ConTrigger on Contact (before insert) {
    if(trigger.isbefore){
        if(trigger.isinsert){
            for(Contact c:Trigger.New){
                c.MobilePhone='9999';
            }
        }
    }
}