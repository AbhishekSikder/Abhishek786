public class AddRemove {
    public string st{get;set;}
    public List<String> l{get;set;}
    public Integer i {get;set;}
    public String error{get;set;}
    public AddRemove(){
        l=new List<String>();
        error='';
    }
    public void add(){
        error='';
        if(l.contains(st)){
            System.debug('Only unique values accepted');
        }
        else
        {
         	l.add(st);
        	st='';   
        }
        
    }
    public void remove(){
        error='';
        l.remove(l.size()-1);
    }
     public void clear(){
         error='';
        l.clear();
    }
    public void deletebyindex(){
        if(i<0 || i>l.size()-1)
        {
            error='Index beyond range';
        }
        else
        {
            error='';
            l.remove(i);
            Integer m=l.size()-1;
            while(i<m){
                l[i]=l[i+1];
                i++;
            }
        }
    }
    public void addbyindex(){
        try{
            error=''; 
            if(i<0||i>l.size())
            {
                error='Index beyond range';
                st='';
            }
            else if(l.size()==0||l.size()==i)
            {
                add();
            }
            else
            {
                    Integer m=l.size()-1;
                    String s=l[l.size()-1];
                    l.add(s);
                  while(m>i){
                    l[m]=l[m-1];
                    m--;
                  }
                    l.set(i,st);
                    st='';     
                                
                   
                
                
                
            }
        }
        catch(Exception e){
            error='the following exception occured'+e;
            System.debug('the following exception occured'+e);
        }
    }
    public void deletebyvalue(){
        /*Integer index=l.indexOf(st);
        if(index<0 || index>l.size()-1)
        {
            error='Index beyond range';
        }
        else
        {
            error='';
            l.remove(index);
            Integer m=l.size()-1;
            while(index<m){
                l[index]=l[index+1];
                index++;
            }
        }*/
        
    }
    
}