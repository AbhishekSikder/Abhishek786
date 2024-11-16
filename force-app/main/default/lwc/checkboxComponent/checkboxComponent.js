import { LightningElement, track } from 'lwc';

export default class CheckboxComponent extends LightningElement {
    @track isChecked = false;

    get boxClass() {
        return this.isChecked ? 'red-background' : 'default-background';
    }

    handleCheckboxChange(event) {
        this.isChecked = event.target.checked;
    }
}
