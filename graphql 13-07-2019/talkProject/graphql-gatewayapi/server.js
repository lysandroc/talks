const { GraphQLServer } = require('graphql-yoga');
const {
  getProduct, 
  getSalesSummary, 
  getProviders
} = require('./myFunctions'); 

const typeDefs = `
  type Query {                                       
    getProduct: Product
    getSalesSummary: [Summary]
    getProviders: [Providers]
  }

  type Product {
    name: String!
    salesPrice: Float!
    salesSummary: [Summary]
    providers: [Provider]
  }

  type Summary {
    month: String!
    quantity: Int!
  }

  type Provider {
    name: String!                                             
    price: Float!
  }                                 
`;

const resolvers = {
  Query: {
    getProduct: getProduct,
    getSalesSummary: getSalesSummary,
    getProviders: getProviders 
  },
};

const options = { port: 80 }
const server = new GraphQLServer({ typeDefs, resolvers })
server.start(options, () => console.log('Server is running on localhost:' + options.port));



