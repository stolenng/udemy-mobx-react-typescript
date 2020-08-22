import {action, autorun, computed, observable, reaction, when} from "mobx";

interface IPerson {
    firstName: string;
    lastName: string;
}

const waitForPromise = () => new Promise(resolve => setTimeout(resolve, 1000));

class Person {
    @observable
    firstName: string = 'Mobx';
    @observable
    lastName: string = 'React';
    @observable
    age: number = 15;
    @observable
    isAlive: boolean = true;
    @observable
    dollars: number = 5;

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

    @action
    updateFullName(name: string, lastName: string) {
        this.firstName = name;
        this.lastName = lastName;
    }

    @computed
    get euros() {
        console.log(`Calculating Euros!`);
        return this.dollars * 2;
    }

    @action
    withdrawal() {
        this.dollars -= 1;
    }
}

const ourPerson = new Person({
    firstName: 'Mobx',
    lastName: 'React'
});

// Good Example:
// reading observable during a track function
autorun(() => {
    console.log(ourPerson.dollars); // dotting into ".dollars" allows us to track it
});

ourPerson.withdrawal();
ourPerson.withdrawal();

// Bad Examples
autorun(() => {
    console.log(ourPerson); // here we miss the dotting into
});

// reading observable during a track function
autorun(async () => {
    await waitForPromise();
    console.log(ourPerson.dollars); // this code happens after the async function so mobx won't know we "read" the observable
});
