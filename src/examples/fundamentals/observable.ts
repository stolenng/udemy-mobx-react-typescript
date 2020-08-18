import {toJS, observable} from "mobx";

interface IPerson {
    firstName: string;
    lastName: string;
}

const personInfo = {
    firstName: 'Mobx',
    lastName: 'React'
};

//normal observable without decorator
const person = observable(personInfo);

console.log(`Normal Observable`, person);

// es6 class + decorators
class Person {
    @observable
    firstName: string = 'Mobx';
    @observable
    lastName: string = 'React';

    constructor(props: IPerson) {
        Object.assign(this, props);
    }
}

const classPerson = new Person(personInfo);

console.log(`Class With Decorator Observable`, classPerson);

console.log(`Back To Normal -> `, toJS(classPerson), toJS(person));


