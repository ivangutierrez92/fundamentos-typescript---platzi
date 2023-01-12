(() => {
  type Sizes = 'S' | 'M' | 'L' | 'XL';

  const login = (data: { email: string; password: string }) => {
    console.log(data.email, data.password);
  };

  login({ email: 'nico@nico.co', password: '121212' });

  const products: any[] = [];

  const addProduct = (data: {
    title: string;
    createdAt: Date;
    stock: number;
    size?: Sizes;
  }) => {
    products.push(data);
  };

  addProduct({title: 'Product1', createdAt: new Date(1933, 1, 1), stock: 12});
  addProduct({title: 'Product1', createdAt: new Date(1933, 1, 1), stock: 12, size: 'XL'});
  console.log(products);
})();
