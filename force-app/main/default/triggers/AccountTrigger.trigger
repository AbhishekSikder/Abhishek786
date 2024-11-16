trigger AccountTrigger on Account (before insert,after insert) {
    if(trigger.isInsert){
        if(trigger.isBefore){
            //AccountController.method1(trigger.new);
            for(Account a:Trigger.New){
                a.name=a.name+'SF Jungle';
            }
            
        }
        if(trigger.isAfter){
            //AccountController.method2(trigger.new);
             List<Opportunity> olist=new List<Opportunity>();
            for(Account a:Trigger.New){
                Opportunity o=new Opportunity();
                o.accountId=a.Id;
                o.Amount=17000000;
                o.Name=a.Name;
                o.CloseDate=system.today()+4;
                o.StageName='Closed Won';
                olist.add(o);
            }
            insert olist;
        }
    }
}