import { buildSchema } from 'graphql';

export const schema = buildSchema(`
  type Query {
    quoteOfTheDay: String
    random: Float!
    rollDices(quantity: Int! = 2): [Int]
  }
`);