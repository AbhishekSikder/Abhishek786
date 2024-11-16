public class AccountCreation {
    @Auraenabled
    public static Id createac(String name, String phone,String industry, String rating){
        List<Account>alist= new List<Account>();
        Account a =new Account();
        a.Name=name;
        a.Phone=phone;
        a.Industry=industry;
        a.Rating=rating;
        alist.add(a);
        insert alist;
        //insert a;
        return alist[0].id;
    }
}