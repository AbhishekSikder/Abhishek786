public class Th1 {
    
    public static void createc(list<Account>alist){
        List<Contact>clist=new List<Contact>();
        for (Account a:alist){
            Contact c=new Contact();
            c.accountid=a.id;
            c.LastName=a.name;
            clist.add(c);
        }
        insert clist;
    }
    public static void changedetail(List<Account>alist){
        for(Account a :alist){
            if(a.Industry=='Banking' || a.industry=='Healthcare'){
                a.rating='Hot';
            }
            
        }
        
    }

}