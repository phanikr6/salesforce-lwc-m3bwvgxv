import { LightningElement } from 'lwc';

export default class HelloWorld extends LightningElement {
    name = 'World';
    connectedCallback() {
        console.log('Hello World!');
    }
}
