public class ContactHandlerphone {
    
    List<id> l=new List<id>();
    public static void getPhone(List<contact> clist){
        set<id> alist=new set<id>();
        for(contact c:clist){
            if(c.accountid!=null){
                alist.add(c.accountid);
            }
            
        }
        // Now we have accountids (unique) in a set so after that we need to create a list of account phonenumber
        // After that iterate through that contact list and whenever the contact accountid matches the id of the account list we can update the contact phone number
        List<Account> al= new List<Account>();
        al=[select id,Phone from Account where id in :alist];
        Map<id,account> mp =new Map<id,account>();
        for(Account a:al){
            mp.put(a.id,a);
        }
        for(contact c:clist){
            if(mp.containsKey(c.accountid)){
                c.OtherPhone=mp.get(c.accountid).phone;
            }
        }
        
    }
}