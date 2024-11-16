public class Futuremethodpractise {
    public Futuremethodpractise(){
        method1();
        method2();
        method3();
    }
    @Future
    public static void method1(){
        system.debug('Method1');
    }
     public static void method2(){
         system.debug('Method2');
    }
	 public static void method3(){
         system.debug('Method3');
    }


}