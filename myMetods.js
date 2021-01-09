_ = {
    each: (array, fna) => {
        for (let i = 0; i < array.length; i++) {
            fna(array[i], i, array)
        }
    },
    filter: (array, fna) => {
        let filteredData = [];
        for (let i = 0; i < array.length; i++) {
            if(fna(array[i], i, array)) {
                filteredData.push(array[i])
            }
        }
        return filteredData;
    },
    map: (array, fna) => {
        const newData = [];
        for (let i = 0; i < array.length; i++) {
            newData.push(fna(array[i]));
        }
        return newData;
    },
    find: (array, fn) => {
        for (let i = 0; i < array.length; i++) {
            if(fn(array[i])) {
                return array[i];
            }
        }
        return undefined;
    },
    pluck: (array) => {
        const newData = [];
        for (let i = 0; i < array.length; i++) {
            newData.push((array[i]));
        }
        return newData;
    }
}

const numbers = [11, 2, 3, 42, 56, 45, 43, 12, 36];

// use del each
_.each(numbers, (number) => console.log(number));

// uso filter para obtener numeros mayores a 20 
const biggerThan20 = _.filter(numbers, (number) => number > 20);
console.log(biggerThan20);

//uso map para multiplicar los valores por 2
const addOne = _.map(numbers, (number) => number * 2);
console.log(addOne);


//uso find para multiplicar encontrar primer numero del array mayor a 10
const bigger = _.find(numbers, (bigger) => bigger > 10 );
console.log(bigger);

//uso Pluck para extraer todos los datos del array 
const x = _.pluck(numbers);
console.log(x);

