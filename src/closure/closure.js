const moneyBox = (coins) => {
    let saveCoins = 0;
    saveCoins += coins;
    console.log(`MoneyBox: ${saveCoins}`);
}

//Closure
const moneyBox = () => {
    let saveCoins = 0
    const countCoins = (coins) => {
        saveCoins += coins;
        console.log(`MoneyBox: $${saveCoins}`);
    }
    return countCoins;
}

let myMoneyBox = moneyBox();

myMoneyBox(3); //3
myMoneyBox(6); //9
myMoneyBox(10);//19

//Closure Ejemplo hijos
const familia = () => {
    let familia = 2;
    const tenerHijos = (cantidadHijos) => {
        familia += cantidadHijos;
        console.log(`Tu familia tiene ${familia} integrantes`);
    }
    return tenerHijos;
}

const myFamilia = familia();

myFamilia(1); //3
myFamilia(2); //5
myFamilia(5); //10


const person = () => {
    let saveName = 'Name';
    return {
        getName: () => {
            return saveName;
        },
        setName: (name) => {
            saveName = name;
        }
    }
}