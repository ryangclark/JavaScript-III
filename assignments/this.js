/* The four principles of "this";
*  Explain in your own words the four principles of the "this" keyword below.
*
* 1. When in the global scope, `this` refers to the `window`, which is the highest level in the browser. I believe you can think of this as the "default scope" of `this`.
* 2. When a function is called using a preceeding dot (e.g. `person.speak()`), `this` refers to the object to the left of the dot. By using dot notation, you're implicity using a different "scope" for `this`.
* 3. When creating an object with the `new` keyword, the `this` refers to the object being created.
* 4. In contrast to implicitly binding `this`, you can explicitly bind `this` using JavaScript's `.call()`, `.apply()`, or `.bind()`. In that case, you actually pass to one of those functions the "scope" you want `this` to have.
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding

// Within Global Scope
console.log(this); // will return the `window` object

// Principle 2
// code example for Implicit Binding

const newObject = {
    plantName: 'fern',
    region: 'jungle',
    funFact: function() {
        console.log(`The ${this.plantName} can be found in the ${this.region}!`);
    }
}
newObject.funFact();

// Principle 3
// code example for New Binding

function PlantGenerator(arguments) {
    this.plantName = arguments.plantName;
    this.region = arguments.region;
    this.herbalApplications = arguments.herbalApplications;
}

const eucalyptus = new PlantGenerator({
    plantName: 'eucalyptus',
    region: 'Australia',
    herbalApplications: 'Soothes joint pain'
});
console.log(eucalyptus.herbalApplications);

// Principle 4
// code example for Explicit Binding

newObject.funFact.call(eucalyptus) // hijacks newObject