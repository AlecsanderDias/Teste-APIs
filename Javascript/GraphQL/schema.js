import { buildSchema } from 'graphql';

export const schema = buildSchema(`
  type Query {
    quoteOfTheDay: String
    random: Float!
    rollDices(quantity: Int! = 2): [Int]
    person: Person
  }

  type Person {
    teste(value: Int! = 5): Int
    maisUmTeste(value: Int! = 2): Int
  }
`);