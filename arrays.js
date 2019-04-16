const numbers = [1, -1, 2, 3, 5, 6, 0, 8];
// const filtered = numbers.filter(n => n%2 == 0);
// console.log(filtered);

// const items = filtered.map(n =>'<li>' + n + '</li>');
// const html = '<ul>' + items.join('') + '</ul>';

const items = numbers
    .filter(n => n%2 == 0)
    .map(n => ({ value : n}))
    .filter(obj => obj.value > 1)
    .map(obj => obj.value);

console.log(items);
