public class Calculator {
    public static Integer add(Integer a, Integer b){
        Integer c=a+b;
        System.debug(c);
        return c;
    }
    public static Integer substract(Integer a, Integer b){
        Integer c=a-b;
        System.debug(c);
        return c;
    }
    public static Integer multiply(Integer a, Integer b){
        Integer c=a*b;
        System.debug(c);
        return c;
    }
    public static Decimal divide(Integer a, Integer b){
        Decimal c=a/b;
        System.debug(c);
        return c;
    }
}