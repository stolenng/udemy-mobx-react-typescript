import {action, autorun, computed, observable, reaction, when} from "mobx";

interface IPerson {
    firstName: string;
    lastName: string;
}

class Person {
    @observable
    firstName: string = 'Mobx';
    @observable
    lastName: string = 'React';
    @observable
    age: number = 15;
    @observable
    dollars: number = 50;
    @observable
    isAlive: boolean = true;

    constructor(props: IPerson) {
        Object.assign(this, props);

        when(
            () => this.age > 99,
            () => this.bury()
        )
    }

    @action
    bury() {
        this.isAlive = false;
    }

    @action
    setAge(age: number) {
        this.age = age;
    }

    @computed
    get euros() {
        console.log('Calculation Euros!');
        return this.dollars * 0.837720897;
    }

    @action
    updateFullName(name: string, lastName: string) {
        this.firstName = name;
        this.lastName = lastName;
    }

    @action
    withdraw() {
        this.dollars -= 10;
    }
}

const ourPerson = new Person({
    firstName: 'Mobx',
    lastName: 'React'
});

console.log('Before Observing - Not Cached', ourPerson.euros);
console.log('Before Observing - Not Cached', ourPerson.euros);

const dispose = autorun(() => {
    console.log(`Current Money - ${ourPerson.euros}`);
});

console.log('After Observing - Cached', ourPerson.euros);
console.log('After Observing - Cached', ourPerson.euros);
console.log('After Observing - Cached', ourPerson.euros);
console.log('After Observing - Cached', ourPerson.euros);

// computed value update right after state change(observable update) !
ourPerson.withdraw();

dispose();





