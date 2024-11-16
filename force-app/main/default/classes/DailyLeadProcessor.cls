public class DailyLeadProcessor implements Schedulable {

    public void execute(SchedulableContext s){
        List<Lead>leadlist=[select id,Name,leadsource from Lead where leadsource='' limit 200];
        for(Lead l:leadlist){
            l.leadsource='Dreamforce';
        }
        update leadlist;
    }
}