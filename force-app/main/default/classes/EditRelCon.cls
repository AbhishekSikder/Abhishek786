public class EditRelCon {
    public list<Contact>clist{get;set;}
    public Account a{get;set;}
    public String accid{get;set;}
    public String LastName{get;set;}
    public String email{get;set;}
    public String phone{get;set;}
    public EditRelCon(){
        accid=ApexPages.currentPage().getParameters().get('id');
        clist=new List<contact>();
        clist=[select lastname,Phone,Email from contact where Accountid=:accid];
        for(Contact c:clist){
            lastName=c.lastname;
            email=c.Email;
            phone=c.Phone;
        }
        
        
    }
    public PageReference up(){
        
        upsert clist;
        PageReference pf =new PageReference('/'+accid);
        return pf;
    }
    public PageReference cancel(){
        
        
        PageReference pf =new PageReference('/'+accid);
        return pf;
    }

}