import RootStore from "./stores/root-store";

const rootStore = new RootStore();

// create 4 users
rootStore.dataStores.usersStore.addUser('Georgy');
rootStore.dataStores.usersStore.addUser('Student 1');
rootStore.dataStores.usersStore.addUser('Student 2');
rootStore.dataStores.usersStore.addUser('Student 3');

// lets take the user so we can do actions on him
const newUser = rootStore.dataStores.usersStore.getUser('Georgy');

// let's add some todos to the user
rootStore.dataStores.todoStore.addTodo('Finish The Exercise', newUser.id);
rootStore.dataStores.todoStore.addTodo('Learn MobX!', newUser.id);

console.log(`${newUser.name} Todos: ${newUser.todos.map(todo => todo.name)}`);

// now we remove him
rootStore.dataStores.usersStore.removeUser('Georgy');
