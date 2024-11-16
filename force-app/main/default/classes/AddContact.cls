public class AddContact {
    public Contact c{get;set;}
    public Account a{get;set;}
    public List<Contact>clist{get;set;}
    public String accid{get;set;}
    public Integer index{get;set;}
    public String error{get;set;}
    public String LastName{get;set;}
    public String email{get;set;}
    public String phone{get;set;}
    public AddContact(){
        accid=ApexPages.currentPage().getParameters().get('id');
        index=0;
        error='';
        clist=new List<Contact>();
        
        /*c.LastName='';
        c.Email='';
        c.Phone='';*/
        
    }
    public void add(){
        c=new Contact();
        c.AccountId=accid;
        c.LastName=LastName;
        c.Email=email;
        c.Phone=phone;
        clist.add(c);
        
        
        this.index=+1;
    }
     public void del(){
        if(this.index<0 || this.index>clist.size()){
            error='Please give correct index';
        }
        else
        {
            Integer i=clist.size()-1;
            while(i>this.index){
                clist[i-1]=clist[i];
                i--;
            }
            clist.remove(clist.size()-1);
        }
        
        
        
    }
    public PageReference save(){
        
       
        /*for(Contact cc:clist){
            if(String.isBlank(cc.LastName)){
                error='LastName is mandatory';
                return;
            }
        }*/
          insert clist;  
         PageReference pf =new PageReference('/'+accid);
         return pf;
    }
}