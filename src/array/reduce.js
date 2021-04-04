
const reducer = (acc, item) => {
    return acc + item
}

const reduce = (array, initialValue = 0) => {
    return array.reduce(reducer, initialValue);
}

export default reduce;


