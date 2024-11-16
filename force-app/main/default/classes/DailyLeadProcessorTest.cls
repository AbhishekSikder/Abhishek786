@isTest
public class DailyLeadProcessorTest {
	public static string CRON_EXP='0 50 20 8 6 ?';
    @isTest
    static void testScheduledJob(){
        List<Lead>leadlist=new List<Lead>();
        for(Integer i=0;i<200;i++){
            Lead l=new Lead();
            l.Salutation='Mr.';
            l.LastName='Sikderr'+i;
            l.Company='Google';
            leadlist.add(l);
        }
        try{
             insert leadlist;
        }
        catch (DmlException e){
            system.debug('DmlException'+e.getMessage());
        }
       
        Test.startTest();
        String jobid=System.schedule('TestSchedular',CRON_EXP,new DailyLeadProcessor());
        Integer count=0;
        for(Integer i=0;i<leadlist.size();i++){
            count++;
        }
        System.assertEquals(200,count);
        Test.stopTest();
    }
    
}