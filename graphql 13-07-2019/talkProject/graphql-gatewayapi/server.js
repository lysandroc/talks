const { GraphQLServer } = require('graphql-yoga');
const { getProductDetails } = require('./services'); 

const typeDefs = `
  type Query {                                       
    getProductBy(name: String!): Product
  }

  type Product {
    name: String!
    salesPrice: Float!
    salesSummary: [Summary]
    providers: [Provider]
  }

  type Summary {
    month: String!
    sale: Int!
  }

  type Provider {
    name: String!                                             
    price: Float!
  }                                 
`;

const resolvers = {
  Query: {
   getProductBy: async (_, { name }) => await getProductDetails(name)
  },
};

const options = {   
  port: 80,   
  endpoint: '/graphql',
  subscriptions: '/subscriptions',
  playground: '/playground',
};

const server = new GraphQLServer({ typeDefs, resolvers });

server.start(options);



