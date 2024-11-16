public class StandardSetControllerClass {
    public List<Account>alist {get;set;}
    public Account a{get;set;}
    public ApexPages.StandardSetController controller;
    public StandardSetControllerClass(){
       	
        alist= [select id, name from Account];
		controller = new ApexPages.StandardSetController(alist);
        Integer i=0;
        Integer count=0;
        for(i=0;i<controller.getResultSize();i++){
            if(a.name==alist[i].name){
                break;
            }
            i++;
            
        }
    }
}