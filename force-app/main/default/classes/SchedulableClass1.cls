public class SchedulableClass1 implements Schedulable{
    public void execute(Schedulablecontext sc){
        List<Opportunity>olist=[select id,StageName,CloseDate from opportunity where CloseDate<Today and isclosed=false];
        List<Task>tlist=new List<Task>(); 
            for(Opportunity o:olist){
            Task t=new Task();
                t.WhatId=o.id;
                tlist.add(t);
                
        }
        insert tlist;
    }
}