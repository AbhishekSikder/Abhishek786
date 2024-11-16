public class LeadClass {
    @AuraEnabled(cacheable=true)
    public static List<Lead> getLeads(String leadsource, String Leadstatus){
        String query='';
        
        if(String.isblank(leadsource) && String.isblank(Leadstatus)){
            query='';
        }
        //else either source is blank and status is not blank
        //either source is not blank and status is blank
        //either both of them are not blank
        else
        {
            query='select id,name,leadsource,status from lead';
            //source is not blank
            if(!String.isblank(leadsource)){
                //sorce is not blank and status is blank
                if(String.isblank(Leadstatus)){
                    query+=' where leadsource=:leadsource';
                } 
                //sorce is not blank and status is not blank
                else
                {
                    query+=' where leadsource=:leadsource and status=:Leadstatus';
                }
            
        	}
            else
            {
                query+=' where status=:Leadstatus';
            }
         
        }
        
        
        List<Lead> sobjList = Database.query(query);
        system.debug(sobjList);
        return sobjList;
    }
}