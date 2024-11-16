public class SiteVisitRecordSharing {
    public static void ShareRecord(ID recordid, ID userid){
        Site_Visit__share sv = new Site_Visit__share();
        sv.ParentId=recordid;
        sv.UserOrGroupId=userid;
        sv.AccessLevel='Read';
        sv.RowCause=Schema.Site_Visit__share.RowCause.Manual;
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