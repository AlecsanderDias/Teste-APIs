export const root = {
  quoteOfTheDay() {
    return Math.random() < 0.5 ? 'Take it easy' : 'Salvation lies within';
  },
  random() {
    return Math.random();
  },
  rollDices({quantity}) {
    let result = [];
    for(let i=0;i<quantity;i++) {
      let val = 1 + Math.floor(Math.random() * 6);
      result[i] = val;
    }
    return result;
  },
  person: () => ({
    teste({value}) {
      return value;
    },
    maisUmTeste({value}) {
      return value+1;
    }
  })
};