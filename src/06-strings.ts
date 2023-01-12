(() => {
  let productTitle = 'My Amazing Product';
  productTitle = "My Amazing Product changed";
  console.log('productTitle', productTitle);

  const productDescription = "I'm bla bla bla bla bl s asasas";
  console.log('productDescription', productDescription);
  let productPrice = 100;
  let isNew: boolean = false;

  const summary = `
    title: ${productTitle}
    description: ${productDescription}
    price: ${productPrice}
    isNew: ${isNew}
  `;
})();