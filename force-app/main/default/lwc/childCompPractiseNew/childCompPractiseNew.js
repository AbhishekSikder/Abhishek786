import { LightningElement,api } from 'lwc';

export default class ChildCompPractiseNew extends LightningElement {
    @api label;
    value = ['option1'];
    get options(){
        return [
            { label: 'Ross', value: 'option1' },
            { label: 'Rachel', value: 'option2' },
            { label: 'Abhi', value: 'option3' },
            { label: 'May', value: 'option4' },
            { label: 'June', value: 'option5' },
        ];
    }

    @api ValuefromParent(StudentName){
        this.value=StudentName.split(',');

    }
}