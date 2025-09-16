export const root = {
  quoteOfTheDay() {
    return Math.random() < 0.5 ? 'Take it easy' : 'Salvation lies within';
  },
  random() {
    return Math.random();
  },
  rollDices(args) {
    let result = [];
    for(let i=0;i<args.quantity;i++) {
      let val = 1 + Math.floor(Math.random() * 6);
      result[i] = val;
    }
    return result;
  },
};