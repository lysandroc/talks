const { GraphQLServer } = require('graphql-yoga');
const { getProductDetails } = require('./services'); 
export default {
  Query: {
    personById:  async (root, { id }) => await fetch(`{url}/{id}`);
  }
};
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

  type Query {
    personById(id: Int) : [Person!]!
  }
  type Person {
    id: ID!
    name: String!
    age: Int!
    name: [Post!]!
  }                                   
`;
//asiudsahudhsuhdsaidhsaui
const resolvers = {
  Query: {
   getProductBy: async (_, { name }) => await getProductDetails(name)
  },
};

const f = (root, args, context, info) => {
//return some obj
};

const typeDefs = `                  
  type Query {                      
    personById(id: Int) : [Person!]!
  }                                 
  type Person {                     
    id: ID!                         
    name: String!                   
    age: Int!                       
    name: [Post!]!                  
  }                                 
`;                                  



  const typeDefs = `                  
   type Query {                      
     personById(id: Int) : [Person!]!
   }                                
                                     
   type Person {                     
     id: ID!                         
     name: String!                   
     age: Int!                       
     name: [Post!]!                  
   }                                 
  `;                                                                        

const options = {   
  port: 80,   
  endpoint: '/graphql',
  subscriptions: '/subscriptions',
  playground: '/playground',
};
                           
const server = new GraphQLServer({ typeDefs, resolvers });

server.start(options);



