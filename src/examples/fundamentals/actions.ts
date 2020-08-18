import {action, observable, runInAction} from "mobx";

const waitForPromise = () => new Promise(resolve => setTimeout(resolve, 1000));

interface IPerson {
    firstName: string;
    lastName: string;
}

class Person {
    @observable
    firstName: string = 'Mobx';
    @observable
    lastName: string = 'React';

    constructor(props: IPerson) {
        Object.assign(this, props);
    }


    @action // single batch update 2 observables
    updateFullName(name: string, lastName: string) {
        this.firstName = name;
        this.lastName = lastName;
    }

    @action
    setFirstName(firstName: string) {
        this.firstName = firstName;
    }

    @action
    setLastName(lastName: string) {
        this.lastName = lastName;
    }
}

const ourPerson = new Person({
    firstName: 'Mobx',
    lastName: 'React'
});

// will trigger 1 update
ourPerson.updateFullName('Georgy', 'Glezer');

// each 1 will trigger single update -> 2 in total
ourPerson.setFirstName('Random');
ourPerson.setLastName('Name');

runInAction(async () => {
    // this 2 below will trigger single update
    ourPerson.firstName = 'Need More Names';
    ourPerson.lastName = 'Need More Names';

    // everything after this line will trigger new batch thus will trigger another update
    await waitForPromise();

    ourPerson.firstName = 'ASync Name';
});


