// Remeber To Install mobx@6(version 6) if u want to use it
// import { makeObservable, observable, action, computed, autorun } from "mobx";
//
// class Person {
//     id: number = 1;
//     name: string;
//
//     constructor(name: string) {
//         this.name = name;
//         makeObservable(this, {
//             name: observable,
//             updateName: action,
//             coolName: computed
//         });
//     }
//
//     updateName(newName: string) {
//         this.name = newName;
//     }
//
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
//
//
export {};
