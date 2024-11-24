/***
    @Description : This class is used to sort a list of Integers
    @Author : Abhishek
    @LastModifiedOn: 23-11-2024

***/

public Class BubbleSortClass{

    //BubbleSortClass.cls-meta.xml
    //List<Integer> integerList= new List<Integer>{9,8,7,6,5,4,3,2,1};

    public static List<Integer>sortList(List<Integer> integerList){

        for(Integer i=0;i<=integerList.size()-1;i++){
                for(Integer j=0;j<integerList.size()-1;j++){
                    if(integerList.get(i)<integerList.get(j)){
                        swapNumbers(integerList,i,j);
                    }
                }
        }
        system.debug('List sorted: '+integerList );
        return integerList;
    }

    public static void swapNumbers(List<Integer> integerList, Integer i, Integer j) {
        // Swap the elements in the list at indices i and j
        Integer temp = integerList.get(i);  // Get the value at index i
        integerList.set(i, integerList.get(j));  // Set index i to the value at index j
        integerList.set(j, temp);  // Set index j to the original value of index i
    }
    


}