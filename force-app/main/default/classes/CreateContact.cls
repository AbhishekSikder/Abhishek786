public class CreateContact {
    public Contact c{get;set;}
    
    public CreateContact(){
        c=new Contact();
    }
    public pagereference Save(){
        insert c;
        pagereference pf=new pagereference('/'+c.Id);
        return pf;
    }

}