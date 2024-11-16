public class HandlerAc {
    public static void Conname(List<Account>aclist,Map<id,Account>mp){
     //   set<id>acid=new Set<id>();
        Map<id,account>fm=new Map<id,account>();
        for(Account a :aclist){
            if(a.name!=mp.get(a.id).name){
         //       acid.add(a.id);
                fm.put(a.id,a);
            }
        }
        List<Contact>clist=[select id,lastname,accountid from contact where accountid in:fm.keySet()];
        
        if(clist.size()>0){
             for(Contact c:clist){
            c.lastname=fm.get(c.accountid).name;
        	}
        }
        try{
            update clist;
        } 
        catch(DmlException e){
            system.debug(e);
        }
       
        
    }
    public static void preventDelete(List<Account>aclist){

	set<id>accidlist=new Set<id>();
	List<Opportunity>olist=[select id,amount from opportunity where amount>400 and accountid in:accidlist];
	Map <id,List<Opportunity>>acopmap=new Map<id,List<Opportunity>>();
	for(Opportunity o:olist){
	if(acopmap.containsKey(o.accountid)){
	acopmap.get(o.accountid).add(o);

	}
	else
	{
		List<Opportunity>nlist=new List<Opportunity>();
		nlist.add(o);
		acopmap.put(o.accountid,nlist);
	}
	
	}
        for(Account a:aclist){
            if(acopmap.containsKey(a.id)&&acopmap.get(a.id).size()>2){
                a.addError('Account cannot be deleted');
            }
        }
	
}

}