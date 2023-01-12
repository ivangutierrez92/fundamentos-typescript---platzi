(() => {
  let myNumber: number;
  let myString: string;
  let myNull: null = null;
  let myUndefined: undefined = undefined;

  let myNumber2: number | null = null;
  myNumber2 = 12;

  let myString2: string | undefined = undefined;
  myString = 'aas';

  // function hi(name: string | null) {
  //   let hello = 'Hola ';
  //   if(name) {
  //     hello += name;
  //   } else {
  //     hello += 'nobody';
  //   }
  //   console.log(hello);
  // }

  function hi(name: string | null) {
    let hello = 'Hola ';
    hello += name?.toLocaleLowerCase() || 'nobody';
    console.log(hello);
  }

  hi("Iván");
  hi(null);
})();