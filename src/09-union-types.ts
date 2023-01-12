(()=> {
  let userId: string | number;
  userId = 1212;
  userId = 'asdasda';

  function greeting(myText: string | number) {
    if(typeof myText === "string") {
      console.log(`string ${myText.toLowerCase()}`);
    } else {
      console.log(`number ${myText.toFixed(1)}`);
    }
  }
  greeting('asd');
  greeting(12.121212);
})();