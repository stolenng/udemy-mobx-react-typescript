// @ts-nocheck

const person = {
    firstName: 'MobX',
    lastName: 'React',
};

let reaction;

const mobx = {
    autorun: function (cb) {
        // we are saving the reaction callback and calling it so the observables inside it have the chance to save it
        reaction = cb;
        cb();
        // after the observables is done being accessed, we remove the reaction reference until next autorun
        reaction = null;
    },
    observable: function (obj) {
        // we keep a unique collection of reactions we need to trigger(this is really simplified)
        const reactions = new Set();

        const handler = {
            get: function (obj, prop) {
                // if we're being accessed inside "tracked function" (autorun) so save our reaction(callback)
                if (reaction) {
                    reactions.add(reaction);
                }

                return obj[prop];
            },
            set: function (obj, prop, value) {
                obj[prop] = value;

                // after each update of the observable we want to trigger the reaction(autorun)
                for (reaction of reactions) {
                    reaction();
                }

                return true;
            }
        }

        // ES6 Proxy - Read attached Docs
        return new Proxy(obj, handler);
    },
};

const ourPerson = mobx.observable(person);

mobx.autorun(() => {
    console.log(`Our Person: ${ourPerson.firstName} ${ourPerson.lastName}`);
});

ourPerson.firstName = 'New Name';

export {mobx};
