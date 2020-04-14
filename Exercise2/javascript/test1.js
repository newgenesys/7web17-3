var gcf = function(x, y) {
    if (y == 0) {
        return x;
    }
    return gcf(y, x % y);
}
console.log(gcf(48,66));