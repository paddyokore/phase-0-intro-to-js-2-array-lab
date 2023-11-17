// Write your solution here!

const cats =  ["Milo", "Otis", "Garfield"];


function beforeEach() {
    cats.length = 0;
    cats.push('Milo', 'Otis', 'Garfield');
    return cats;
}

// appends a cat to the end of the cats array
function destructivelyAppendCat(name) {
    return cats.push(name);
}

// prepends a cat to the beginning of the cats array
function destructivelyPrependCat(name) {
    return cats.unshift(name);
}

// removes the last cat from the cats array
function destructivelyRemoveLastCat() {
    return cats.pop();
}

// removes the first cat from the cats array
function destructivelyRemoveFirstCat() {
    return cats.shift();
}

// appends a cat to the cats array and returns a new array, leaving the cats array unchanged
function appendCat(name) {
    const newCats = [...cats, name];
    return newCats;
}

// prepends a cat to the cats array and returns a new array, leaving the cats array unchanged
function prependCat(name) {
    const newCats = [name, ...cats];
    return newCats;
}

// removes the last cat in the cats array and returns a new array, leaving the cats array unchanged
function removeLastCat() {
    const newCats = cats.slice(0, cats.length-1);
    return newCats;
}

// removes the first cat from the cats array and returns a new array, leaving the cats array unchanged
function removeFirstCat() {
    const newCats = cats.slice(1);
    return newCats;
}