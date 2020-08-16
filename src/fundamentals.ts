import {action, autorun, observable, runInAction} from "mobx";

interface IPerson {
    firstName: string;
    lastName: string;
}

const waitForPromise = async () => new Promise(resolve => setTimeout(resolve, 1000));

class Person {
    @observable
    firstName: string = 'Mobx';
    @observable
    lastName: string = 'React';

    constructor(props: IPerson) {
        Object.assign(this, props);
    }

    // @action
    // updateFullName(name: string, lastName: string) {
    //     this.firstName = name;
    //     this.lastName = lastName;
    // }
}

const ourPerson = new Person({
    firstName: 'Mobx',
    lastName: 'React'
});

// for logging for now.
autorun(() => {
    console.log(`${ourPerson.firstName} ${ourPerson.lastName}`);
});

const updater = action(async () => {
    ourPerson.lastName = 'new Name';
    await waitForPromise();

    ourPerson.firstName = 'new last name'
});

updater();



