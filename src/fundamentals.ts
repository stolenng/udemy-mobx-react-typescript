import {action, autorun, observable, reaction, when} from "mobx";

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

    @action
    updateFullName(name: string, lastName: string) {
        this.firstName = name;
        this.lastName = lastName;
    }
}

const ourPerson = new Person({
    firstName: 'Mobx',
    lastName: 'React'
});

autorun(() => {
    console.log(`${ourPerson.firstName} ${ourPerson.lastName} ${ourPerson.age} - ${ourPerson.isAlive}`);
});

reaction(
    () => !ourPerson.isAlive,
    () => console.log('RIP')
)

// ourPerson.updateFullName('Georgy', 'Glezer');

ourPerson.setAge(120);




