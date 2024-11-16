import { LightningElement } from 'lwc';

export default class ChildComponentB extends LightningElement {
    searchkey;
    handleChange(event){
        this.searchkey=event.target.value;
        const searchEvent= new CustomEvent("getSearchValue",{
            detail: this.searchkey
        });
        this.dispatchEvent(searchEvent);
    }
}