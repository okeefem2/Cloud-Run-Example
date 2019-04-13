function functionalExample() {
    // Pure functions
    // Functions that always produce the same output given the same input
    // and have no side effects
    // Another way to put it is that the output only depends on the input(s)
    let num = 123;

    function toString(val) {
        // num = val; // THis makes the function impure by 
        // altering state outside of the function (a side effect)

        return val.toString();
    }

    const str = toString(num);

    // Immutable data

    const data = Object.freeze([1,2,3,4,5,6]);

    // First order function
    const addEmoji = (val) => toString(val) + '\u{1F600}';

    // Higher order function either takes a fun as an arg or returns one
    const emojiData = data.map(addEmoji);

    const appendEmojis = (fixed) => (dynamic) => fixed + dynamic;
    // Inner function takes both args and adds them
    const rain = appendEmojis('\u{1F31E}');
    const sun = appendEmojis('\u{1F327}');

    console.log(rain(' today'));
    console.log(sun(' tomorrow'));

    /// Read https://probablydance.com/2016/02/27/functional-programming-is-not-popular-because-it-is-weird/ for more info


}

