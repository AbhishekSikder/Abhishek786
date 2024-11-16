public class SiteFinalRecordSharing {
    public static void SfRecordShare(Id recordId, Id userid){
            Site_final__share sv = new Site_final__share();
            sv.ParentId=recordid;
            sv.UserOrGroupId=userid;
            sv.AccessLevel='Read';
            sv.RowCause=Schema.Site_final__share.RowCause.Manual;
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