1. What problem does the context API help solve?

It helps pass data around an application without having to tie it through multiple levels

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

actions - simplify your code by making specific/custom tasks easy to use and reference

reducers -it makes it easier to manage your state and data by having all your state changes in one pure location/format

store - a box that holds all your state and gets passed into components only when it specifically needs to (imagine a bunch of ballons in a pool. If you want a balloon to have water in it, you poke a hole in that one specifically. the pool is the store)

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

App state = global state. everything can and will access everything
comp state = local state. only access what has been connected and needs to be accessed.
Best use cases: App State for small applications/pages where it doesnt actually matter. Comp State for bigger applications where accessing too much data can have adverse effects.

4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

It lets you call functions instead of only objects. makes it easier to write code that actually does something for you. AUTOMATION 🎉

5. What is your favorite state management system you've learned and this sprint? Please explain why!

Redux. Its somewhat easier to understand than context. I dont have another reason.
Less headache = happy Key
