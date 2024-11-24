/***
 *  @Description : This Class retrieves the lowest amount from the child Opportunity records of a particular Account
 *  @Author : Abhishek Sikder
 *  @Last Modified on : 24-11-2024
 * 
 ***/


public with sharing class RetrieveLowestAmount {

    
    public RetrieveLowestAmount() {

    }
    @InvocableMethod(label='Get Opportunity with least discount' Description ='Get Opportunity with least discount')
    public static List<Opportunity> getListAmountRecord(List<String>args){
        Id parentAccountId=args[0];
        List<Opportunity>opportunityList= new List<Opportunity>();
        opportunityList=[select id, amount from opportunity where accountid=:parentAccountId order by amount Asc Limit 1];
        //Integer lowestAmount= (Integer)opportunityList.get(0).Amount;
        return opportunityList;

    }
}