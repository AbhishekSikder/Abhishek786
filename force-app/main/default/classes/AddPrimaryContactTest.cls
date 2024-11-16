@isTest
public class AddPrimaryContactTest {
    
    @isTest
    static void ap(){
        List<Account>alist=new List<Account>();
        for(Integer i=1;i<=50;i++){
            Account a=new Account();
            a.name='Test Account'+i;
            a.BillingState='NY';
            alist.add(a);
        }
        for(Integer i=50;i<=100;i++){
            Account a=new Account();
            a.name='Test Account'+i;
            a.BillingState='CA';
            alist.add(a);
        }
        try{
            insert alist;
        }
        catch(DmlException e){
            system.debug('DmlException'+e.getMessage());
        }
        
        Contact c=new Contact();
        c.lastname='Test Primary Contact';
        insert c;
        set<id>acidlist=new Set<id>();
        for(Account a:alist){
            acidlist.add(a.id);
        }
        Test.startTest();
        System.enqueueJob(new AddPrimaryContact(c,'CA'));
        
        
        Test.stopTest();
        List <Contact> newclist=[select id,lastname, account.name from contact where id in :acidlist ];
        System.assertEquals(50, newclist.size());
        

    }

}