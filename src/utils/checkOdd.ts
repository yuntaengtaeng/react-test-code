const checkOdd = (num: number) => {
  return new Promise((r) => {
    setTimeout(() => {
      r(num % 2 === 1);
    }, 1000);
  });
};

export default checkOdd;
