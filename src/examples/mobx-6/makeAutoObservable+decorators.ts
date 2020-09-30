 // Remeber To Install mobx@6(version 6) if u want to use it
 // import { makeAutoObservable, observable, action, computed, autorun } from "mobx";

 // class Person {
 //     id: number = 1;
 //
 //     @observable
 //     name: string;
 //
 //     constructor(name: string) {
 //         this.name = name;
 //         makeAutoObservable(this, {
 //             id: false,
 //         });
 //     }
 //
 //     @action
 //     updateName(newName: string) {
 //         this.name = newName;
 //     }
 //
 //     @computed
 //     get coolName() {
 //         return `im cool ${this.name}`;
 //     }
 // }
 //
 // const newPerson = new Person("Georgy");
 //
 // autorun(() => {
 //     console.log(newPerson.coolName);
 // });
 //
 // newPerson.updateName('New Name');


export {};
