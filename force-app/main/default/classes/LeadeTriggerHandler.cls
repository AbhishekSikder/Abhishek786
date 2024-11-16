public class LeadeTriggerHandler {
    public static void SendEmailtoNewLead(List<Lead>leadlist){
        
        
        Messaging.SingleEmailMessage msg= new Messaging.SingleEmailMessage();
        msg.toAddresses = new String[] { 'abhi.sikder11@gmail.com' };
        msg.subject='Test Welcome mail';
        msg.plainTextBody = 'Welcome to QUess Corp. Our Sales representatives will contact you soon';
        Messaging.SingleEmailMessage[] messages = new List<Messaging.SingleEmailMessage> {msg};
        Messaging.SendEmailResult[] results = Messaging.sendEmail(messages);
        if (results[0].success) {
            System.debug('The email was sent successfully.');
        } else {
            System.debug('The email failed to send: '
                  + results[0].errors[0].message);
        }
      }
    public static void SendEmailtoOwner(){
        Messaging.SingleEmailMessage msg= new Messaging.SingleEmailMessage();
        msg.toAddresses = new String[] { 'abhi.sikder11@gmail.com' };
        msg.subject='Test Welcome mail';
        msg.plainTextBody = 'Welcome to QUess Corp. Our Sales representatives will contact you soon';
        Messaging.SingleEmailMessage[] messages = new List<Messaging.SingleEmailMessage> {msg};
        Messaging.SendEmailResult[] results = Messaging.sendEmail(messages);
        if (results[0].success) {
            System.debug('The email was sent successfully.');
        } else {
            System.debug('The email failed to send: '
                  + results[0].errors[0].message);
        }
      }
}