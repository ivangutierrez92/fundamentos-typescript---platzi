import { addProduct, calcStock, products } from './product.service';

addProduct({
  title: 'Pro1',
  createdAt: new Date(1933, 1, 1),
  stock: 5,
});

addProduct({
  title: 'Pro2',
  createdAt: new Date(1933, 1, 1),
  stock: 7,
});

console.log(products);
const total = calcStock();
console.log(total);
