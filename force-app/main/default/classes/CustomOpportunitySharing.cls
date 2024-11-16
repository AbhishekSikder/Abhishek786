public class CustomOpportunitySharing {
    
    public static void OpRecordShare(Id recordId, Id userid){
            opportunity__share sv = new opportunity__share();
            sv.ParentId=recordid;
            sv.UserOrGroupId=userid;
            sv.AccessLevel='Read';
            sv.RowCause=Schema.opportunity__share.RowCause.Manual;
            Database.SaveResult sr=Database.insert(sv,false);
            
            if(sr.isSuccess()){
                System.debug('Record shared successfully');
            }
            else
            {
                System.debug('Record sharing failed');
            }
        
    }

}