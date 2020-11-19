module.exports = (x, y, callback) => {
    if (x <= 0 || y <= 0) {
        callback(new Error(`Rectangle dimensions must be greater than zero. Received: ${x}, ${y}`));
    } else {
        setTimeout(() =>
            callback(null, {
                perimeter: () => 2 * (x + y), //No longer needs to pass in x and y because of closures
                area: () => x * y //The inner function has the scope of the outer function
            }),
            2000
        );
    }
};