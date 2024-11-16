public class SE1 {
    public String To {get;set;}
    public String bcc{get;set;}
    public String cc{get;set;}
    public String body{get;set;}
    public String subject{get;set;}
	String []ccAddresses= new String []{'jayasikder101@gmail.com'};
    String []toAddresses= new String []{'abhi.sikder11@gmail.com'};
    
    public  SE1(){
        To='abhi.sikder11@gmail.com';
        bcc='jayasikder101@gmail.com';
        cc='sikderpk@gmail.com';
    }
    public  PageReference send(){
        String []toAddresses= new String []{'abhi.sikder11@gmail.com'};
            String []ccAddresses= new String []{'jayasikder101@gmail.com'};
          
        
        Messaging.SingleEmailMessage email= new Messaging.SingleEmailMessage();
        	email.setSubject(subject);
            email.setToAddresses(toAddresses);
            email.setPlainTextBody(body);
      	    Messaging.SendEmailResult [] r = 
			Messaging.sendEmail(new Messaging.SingleEmailMessage[] {email}); 
        	return null;
    }
}