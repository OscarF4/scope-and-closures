var hello = 'Hello';
let world = 'Hello World';
console.log(hello);

const anotherFunction = () => {
    console.log({
        hello,
        world
    });
}

anotherFunction();

const anotherFunction = () => {
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            console.log(i);
        }, 1000)
    }
    console.log('Adentro es ' + i);
};
anotherFunction();