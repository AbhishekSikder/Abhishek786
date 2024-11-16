import { LightningElement,track } from 'lwc';

export default class LWChw1 extends LightningElement {
     students = new Map();
     @track name='';
     @track age='';
     s=["Abhishek","Rohit","Shubham"]
     columns=[{ label: 'Student name', fieldName: 'StudentName', type: 'text' },{ label: 'Student age', fieldName: 'StudentAge', type: 'text' }];
     @track data=[{StudentName : 'Abhishek', StudentAge:'24'},{StudentName : 'Subham', StudentAge:'23'} ]
     handleonchange(event){
          this.name=event.target.value;
     }
     handleonchangeb(event){
          this.age=event.target.value;

     }
     handleonchangename(event){
          
          this.data.push({StudentName : this.name, StudentAge:this.age})
          this.name='';
          this.age='';
          //this.template.querySelector('.input').textContent='';
          ia=this.template.querySelector('lightning-input').value;
          this.template.querySelectorAll('lightning-input').value='';
         // this.template.querySelector('.input').value='';
          console.log(ia)
     }
     handleoncremove()
     {
          this.data.pop();
     }

    


}