public class SendEmailtoOwner {
	 
    public static void sendemail(Map<id,Account> oldmap, List<Account>aclist){
        set<id>owneridlist=new Set<id>();
        for(Account a:aclist){
            if(oldmap.containsKey(a.id)){
                if(a.industry!=oldmap.get(a.id).industry || a.rating!=oldmap.get(a.id).rating){
                    owneridlist.add(a.ownerid);
                }
            }
        }
        if(owneridlist!=null &&owneridlist.size()>0){
            List<User>OwnerEmailList=[select id,Email from user where id in : owneridlist];
            
            Map<Id,String>emailidmap=new Map<id,string>();
            for(User u:OwnerEmailList){
                emailidmap.put(u.id,u.email);
            }
            List<Messaging.singleEmailMessage>mailbodylist=new List<Messaging.singleEmailMessage>();
            for(Account a:aclist){
                if(a.industry!=oldmap.get(a.id).industry || a.rating!=oldmap.get(a.id).rating){
                    Messaging.singleEmailMessage mail = new Messaging.singleEmailMessage();
                    mail.setToAddresses(new List<String>{emailidmap.get(a.OwnerId)});
                    mail.setSubject('Account Update for'+a.name);
                    
                    mail.setPlainTextBody('Alert! The rating and industry of Account: '+a.Name+' has been changed from old Rating:'+oldMap.get(a.Id).Rating+
                    ' to new Rating: '+a.Rating+' and old Industry:'+oldMap.get(a.Id).Industry+' to new Industry: '+a.Industry);
                    mailbodylist.add(mail);
                                        
                }
                
            }
            if(!mailbodylist.isEmpty()&&mailbodylist.size()>0){
                Messaging.sendEmail(mailbodylist,false);
                system.debug('MailSent');
            }
        }
    }
}