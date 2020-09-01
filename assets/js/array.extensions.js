Array.prototype.flat = function () {
    return this.reduce(function (acc, cur) {
        acc.push(...cur);
        return acc;
    }, []);
};
