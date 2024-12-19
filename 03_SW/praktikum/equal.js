function equal(x, y) {

    if (x === y) {
        return true;
    }

    if (typeof x !== 'object' || x === null || typeof y !== 'object' || y === null) {
        return false;
    }

    let keysX = Object.keys(x);
    let keysY = Object.keys(y);

    if (keysX.length !== keysY.length) {
        return false;
    }
    for (let key of keysX) {
        if (!keysY.includes(key) || x[key] !== y[key]) {
            return false;
        }
    }

    return true;
}
module.exports = { equal }


