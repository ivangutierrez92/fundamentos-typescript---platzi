(() => {
  const calcTotal = (prices: number[]): number => {
    return prices.reduce((acc, curr) => acc + curr, 0);
  }

  const printTotal = (prices: number[]): void  => {
    const rta = calcTotal(prices);
    console.log(`El total es ${rta}`);
  }

  const rta = printTotal([1, 2, 3, 4, 1, 1]);
})();