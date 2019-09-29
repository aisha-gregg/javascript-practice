console.assert(equals({ foo: 'bar' }, { foo: 'bar' }) === true, "should check if the object are equal in their contents")
console.assert(equals({ foo: 'bar' }, { foo: 'baz' }) === false, "should check if the object are not equal in their contents")

function equals(x, y) {
    const ok = Object.keys, tx = typeof x, ty = typeof y;
    return x && y && tx === 'object' && tx === ty ? (
        ok(x).length === ok(y).length &&
        ok(x).every(key => equals(x[key], y[key]))
    ) : (x === y);
}