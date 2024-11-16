public class AddPrimaryContact implements Queueable {
    Contact c;
    String state;
    public AddPrimaryContact(Contact con, String s){
        this.c=con;
        this.state=s;
    }
    public void execute(QueueableContext qc){
        List<Account>alist=[select id,name from account where BillingState =:state limit 200];
        List<Contact>clist=new List<Contact>();
        Integer count=0;
        for(Account a :alist){
            count++;
            Contact newc=c.clone(false,false,false,false);
            c.AccountId=a.id;
            
            clist.add(c);
        }
        insert clist;
    }
}