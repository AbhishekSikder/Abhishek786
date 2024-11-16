public class AccConOpp {
    public Account a {get;set;}
 public Contact c{get;set;}
 public Opportunity o{get;set;}
    
    public AccConOpp(){
        a= new Account();
        c= new Contact();
        o=new Opportunity();
       // c.AccountId=a.id;
       // o.Account=a;
        
    }
    public void save(){
        insert a;
        
        insert c;
        c.AccountId=a.id;
        
        insert o;
        o.AccountId=a.id;
        
    }
    
}