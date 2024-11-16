public class Ac2TriggerHandler {
	
	
    public static void updatecontactsname(List<Account>alist){
        // 1.
        // QUery all the contacts whose accountids matches these ids and store them in alist
        // Iterate through the list whenever the contacts account id matches the Accountid of alist then update the last name of the contact record
        // 2. Put all the accountids in a map of id account while iterating through the alist
        //    QUery all the contacts whose accountids matches these ids and store them in alist
        //    Iterate through the list if the contacts account id matches the Account maps id
        //    then contact c.lastname=mp.get(c.accountid).name;
        
        
       	/*Map<id,account>mp=new Map<id,account>();
        set<id>acidlist=new Set<id>();
        for(Account a:alist){
            mp.put(a.id,a);
        }*/
       
    	//Map<Id, Account> accMap=new Map<Id, Account>();
    	Map<id,account>mp=new Map<id,account>();
    for(Account a:alist){
            mp.put(a.id,a);
        }
    	//List<Opportunity> oppList=[SELECT Id, Amount, AccountId FROM Opportunity
//WHERE AccountId IN :accMap.keySet()];
    
    	List<Contact>clist=[select id,accountid,lastname from contact where accountid in :mp.KeySet()];
    		//List<Account>exampleOne=new List<Account>([SELECT Id, Name FROM Account WHERE Name = 'John']);
    		
        for(Contact c:clist){
            if(mp.containsKey(c.accountid)){
                c.lastname=mp.get(c.accountid).name;
            }
        }
        update clist;
    	
    

    }

    public static void countOfActiveContact(List<Account>alist){
        Map<id,account>acclist=new Map<id,account>();
        for(Account a : alist){
            acclist.put(a.id,a);
        }
        
        List <Contact>clist=[select id,lastname,accountid from contact where Active__c=true and accountid in: acclist.keySet()];
        
        Map<Id,Integer>cmap=new Map<Id,Integer>();
        Integer count;
        for(Contact c:clist){
            count=0;
            if(acclist.containsKey(c.accountid)){
                count++;
                if(cmap.containsKey(c.accountid)){
                    Integer m=cmap.get(c.AccountId);
                    m+=1;
                    cmap.put(c.AccountId,m);
                }
                else
                {
                    cmap.put(c.AccountId,count);
                }
                
            }
        }
        for(Id id:cmap.keySet()){
            System.debug(cmap.get(id));
        }
    }

}