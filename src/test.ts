import {action, autorun, computed, observable, reaction, runInAction, when} from "mobx";

const waitForPromise = () => new Promise(resolve => setTimeout(resolve, 1000));

class Person {
    @observable
    firstName: string = '';
    @observable
    lastName: string = '';
    @observable
    age: number = 15;
    @observable
    isAlive: boolean = true;
    @observable
    dollars: number = 10;

    constructor(props: Partial<Person>) {
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
        console.log('Calculation Euros!')
        return this.dollars * 2;
    }

    @action
    withdrawl() {
        this.dollars = this.dollars-1;
    }
}

const newPerson = new Person({
    firstName: 'Georgy',
    lastName: 'Glezer'
});

autorun(async () => {
    console.log(`Euros: ${newPerson.euros}`)
});

newPerson.withdrawl();
newPerson.withdrawl();
newPerson.withdrawl();

export {};
