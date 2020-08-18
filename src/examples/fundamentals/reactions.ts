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

        // when example -> this one disposed after condition is met and effect function is called
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

// this reaction track every observable accessed inside it and will re run on each update of them.
const autoRunDisposer = autorun(() => {
    console.log(`${ourPerson.firstName} ${ourPerson.lastName} ${ourPerson.age} - ${ourPerson.isAlive}`);
});

const reactionDisposer = reaction(
    () => !ourPerson.isAlive,
    // the conditionValue is the result of expression function above
    (conditionValue) => console.log('RIP')
)

// ourPerson.updateFullName('Georgy', 'Glezer');

ourPerson.setAge(120);

// we will dispose them after 2 sec and we will no longer react on changes
setTimeout(() => {
    autoRunDisposer();
    reactionDisposer();
}, 2000);



