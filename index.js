const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');


const database = require('./database')
// Construct a schema, using GraphQL schema language
const typeDefs = gql`

    type User {
        initials: String!, 
        score: Int!
    }

    type Query {
        users: [User]
    }
`;

// Provide resolver functions for your schema fields
const resolvers = {
    Query: {
        users: async () => {
            const users = await database('users').select()
            return users
        }
    },
};


const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);

