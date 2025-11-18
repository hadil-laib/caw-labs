
function first(array, n) {
    if (array == null)
        return [];
    if (n == null)
        return array[0];
    if (n <= 0)
        return [];
    return array.slice(0, n);
}


function last(array, n) {
    if (array == null)
        return [];
    if (n == null)
        return array[array.length - 1];
    return array.slice(Math.max(array.length - n, 0));
}


const myColor = ["Red", "Green", "White", "Black"];


function chunk(array, size) {
    var chunkedArr = [];
    var index = 0;
    while (index < array.length) {
        chunkedArr.push(array.slice(index, size + index));
        index += size;
    }
    return chunkedArr;
}

module.exports = {
    first,
    last,
    myColor,
    chunk
};