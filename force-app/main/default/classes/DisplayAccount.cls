public class DisplayAccount {
    Public List<wrap>w {get;set;}
    Public List<Account> ac {get;set;}
    public boolean b{get;set;}
    public DisplayAccount(){
        w= new List<wrap>();
        for(Account a:[select Name,AccountNumber,AnnualRevenue,	Phone from account]){
            w.add(new wrap(a));
        } 
        
    }
    public class wrap{
        
        Public Account a {get;set;}
    	public boolean b{get;set;}
        public wrap(Account d){
            a= d;
            
           b=false;
        }
        
        
    }
}