public class CreateWAccount {
    public Account a {get;set;}
    public Contact c {get;set;}
    public List<Account> alist {get;set;}
    public Integer count=0;
    public CreateWAccount(){
        a= new Account();
   //     c= new Contact();
        alist=[select id,Name from Account];
        
        
      //  c.lastname='Contact';
						        
    }
    public void onsave(){
        for(Account acc:alist){
            if(a.Name!=acc.Name){
                count++;
            }            
        }
        if(count==alist.size()){
            insert a;
        }
        
        
        
      //  c.AccountId=a.Id;
      //  insert c;
        //before inserting we need to update accountid of contact
        //
        
    }
    
}