import {observable} from "mobx";

let person = observable({
    firstName: 'Mobx',
    lastName: 'React'
});

class Person {
    @observable
    firstName: string = 'Mobx';
    @observable
    lastName: string = 'React'

    constructor(props: any) {
        Object.assign(this, props);
    }
}

console.log(person);

const classPerson = new Person({
    firstName: 'Class',
    lastName: 'Observable'
});

console.log(classPerson);



