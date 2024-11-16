public class CreateInvoice {
    public List<Invoice__c> ivlist{get;set;}
    public List<Salesorder__c> so{get;set;}
    public List<Invoice_Line_Product__c> ili {get;set;}
    public list<SalesOrderLineItem__c> sli{get;set;}
    public string salesorderid;
    public Salesorder__c s{get;set;}
    public Invoice__c iv{get;set;}
    public Invoice_Line_Product__c ip{get;set;}
    public createInvoice(){
        salesorderid=ApexPages.currentPage().getParameters().get('id');
                system.debug(salesorderid);

        so=[select 	Account__c,Contact__c,Opportunity__c,Salesorder_Date__c,Salesorder_num__c from Salesorder__c where id='a0G5j00000DWZR6'];
        system.debug(so);
        system.debug(salesorderid);
        ivlist=new List<Invoice__c>();
        iv=new Invoice__c();
        iv.Salesorder__c=salesorderid;
        if(so!=null && so.size()>0){
            iv.Account__c=so[0].Account__c;
            iv.Contact__c=so[0].Contact__c;
            iv.Customopportunity__c=so[0].Opportunity__c;
            ivlist.add(iv);
        }
        
        sli=[select Name,Salesorder__c,Quantity__c,Productc__c from SalesOrderLineItem__c where salesorder__c='a0G5j00000DWZR6'];
        
        ili=new List<Invoice_Line_Product__c>();
        
        for(SalesOrderLineItem__c s:sli){
            ip =new Invoice_Line_Product__c();
            ip.SalesOrderLineItem__c=s.id;
            ip.BalanceQuantity__c=s.Quantity__c;
           // s.Quantity__c= s.Quantity__c-ip.BalanceQuantity__c;
            ip.Productc__c=s.Productc__c;
            ili.add(ip);
        }
       
    }
    public PageReference onsave(){
        insert ivlist;
        insert ili;
   //     upsert sli;
        PageReference pf =new PageReference('/'+salesorderid);
        return pf;
    }
   /* public static void print(){
        
        console.log(sli);
    }*/
}