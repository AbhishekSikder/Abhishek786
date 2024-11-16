import { LightningElement,track } from 'lwc';

export default class Retry1 extends LightningElement {
    fn="Abhishek";
    ln="Sikder";

    employeeColumn=[{label:'Employee ID',fieldName:'employeeid'},{label:'Employee Name',fieldName:'employeename'},{label:'Phone Number',fieldName:'phonenumber'},{label:'Email Address',fieldname:'Email'}]
    employeeData=[
        
    {
    employeeid: '1',
    employeename: 'Richard Hendricks',
    phonenumber: '(158) 389-2794',
    Email: 'richard@piedpiper.com'
    },
    {
        employeeid: '2',
        employeename: 'Richard ka baap Hendricks',
        phonenumber: '(159) 389-2794',
        Email: 'richard@piedpiper.com'
    }]
   @track salary;
    showme(event){
        if(event.target.name=='Salary'){
            this.salary=event.target.value;
        }
        
    }
    callme(){
        return this.salary;
    }
}