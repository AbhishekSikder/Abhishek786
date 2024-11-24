/*** 
    @Description : This Class is used to test the BubbleSort Class
    @author : Abhishek
    @LastModifiedOn: 23-11-2024
    BubbleSortTest.cls-meta.xml
***/


@isTest
Public Class BubbleSortTest{

    @isTest
    public static void checkOutput(){
        List<Integer> integerList= new List<Integer>{9,8,7,6,5,4,3,2,1};
        Test.startTest();
        BubbleSortClass.sortList(integerList);
        Test.stopTest();

        System.assertEquals(1,integerList.get(0),'Actual does not equal Expected');

    }

}