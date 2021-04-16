// Use the forEach method to solve these problems! All functions should return a NEW array, without mutating the old array.

/*
Output:

['spot', 'rover', 'jumpy', 'einstein']
*/

export function makeArrayOfNames(arr) {
    const newArray = []
    arr.forEach((item) => {
        newArray.push(item.name)
    })
    return newArray;
}

/*
Output:

['cat', 'frog', 'dog', 'dog']
*/

export function makeReversedArrayOfTypes(arr) {
    const reverseArray = []
    arr.forEach((item) => {
        reverseArray.push(item.type)
        reverseArray.reverse()
    })

    return reverseArray;
}


/*
Output:

[
    { nombre: 'spot', tipo: 'dog' },
    { nombre: 'rover', tipo: 'dog' },
    { nombre: 'jumpy', tipo: 'frog' },
    { nombre: 'einstein', tipo: 'cat' },
]
*/

export function makeSpanishLanguageArray(arr) {
    const newArray = []
    arr.forEach((item) => {

        let espanol = { nombre: item.name, tipo: item.type }

        newArray.push(espanol)
    })
    return newArray;
}

