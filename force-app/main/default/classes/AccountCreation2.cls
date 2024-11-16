public class AccountCreation2 {
	@AuraEnabled
    public static List<Account> create(String name, String industry){
        List<Account>aclist= new List<Account>();
        Account a =new Account();
        a.name=name;
        a.Industry=industry;
        aclist.add(a);
        insert aclist;
        return aclist;
    }
}