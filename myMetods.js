_ = {
    each: (array, fna) => {
        for (let i = 0; i < array.length; i++) {
            fna(array[i], i, array)
        }
    },
    filter: (array, fna) => {
        let filteredData = [];
        for (let i = 0; i < array.length; i++) {
            if (fna(array[i], i, array)) {
                filteredData.push(array[i])
            }
        }
        return filteredData;
    },
    mapp: (array, fna) => {
        const newData = [];
        for (let i = 0; i < array.length; i++) {
            newData.push(fna(array[i]));
        }
        return newData;
    },
    findtt: (array, fn) => {
        for (let i = 0; i < array.length; i++) {
            if (fn(array[i])) {
                return array[i];
            }
        }
        return undefined;
    },
    findIndexx: (array, fn) => {
        for (let i = 0; i < array.length; i++) {
            if (fn(array[i])) {
                return i;
            }
        }
        return undefined;
    },
    
    contains: (array, filtered) => {
        const a = Object.assign({}, array);
        const b = filtered;
        if (b in a) {
            console.log(true);
        } else {
            console.log(false);
        }
    },
    pluck: (array, property) => {
        const newData = [];
        for (let i = 0; i < array.length; i++) {
            if (array[i].hasOwnProperty(property)) {
                newData.push(array[i][property]);
            }
        }
        return newData;
    },
    withOut: (array, a) => {
        let delets = [];
        let acepted = [];
        for (let i = 0; i < array.length; i++) {
            const result = array[i];
            if (result === a) {
                delets.push(result);
            } else {
                acepted.push(result);
            }
        }
        return console.log(acepted);
    }
}

const numbers = [11, 2, 3, 42, 56, 45, 43, 12, 36];

const stooges = [{ name: 'moe', age: 40 }, { name: 'larry', age: 50 }, { name: 'curly', age: 60 }];

// Uso del metodo each para imprimir la relacion index : value
// _.each(numbers, (value, index) => console.log(` En el indice ${index} se encuentra el valor ${value},`));

// uso filter para obtener numeros mayores a 20 
// const biggerThan20 = _.filter( numbers, (number) => number > 20);
// console.log(biggerThan20);

//uso map para multiplicar los valores por 2
// const addOne = _.mapp(numbers, (number) => number * 2);
// console.log(addOne);

//uso findtt para encontrar primer valor del array mayor a 10
//const bigger = _.findtt(numbers, bigger => bigger > 36);
//console.log(bigger);

//uso findIndex para encontrar la posición del primer valor del array mayor a 10
// const biggerrr = _.findIndexx(numbers, bigger => bigger > 40 );
// console.log(biggerrr);

// Se usa Contains para que retorne true si el tres esta en el array
// const z = _.contains(numbers, 3);

//uso Pluck para extraer todos los datos del array 
// const x = _.pluck(stooges, "name");
// console.log(x);

// uso withOut quitar cualquier dato del array
// const x = _.withOut(numbers, 2);



