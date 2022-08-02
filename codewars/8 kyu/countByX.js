const countBy = (x, n) => {
let z = [];
for (i = 1; i <= n; i++) {
    z.push(x * i);
}
return z;
};

countBy(1, 10);
countBy(2, 5);
