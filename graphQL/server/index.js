const { ApolloServer, gql } = require('apollo-server');

const students = require('./students.json');

const typeDefs = gql`
  type Student {
    id: Int
    name: String
    email: String
    age: Int
  }

  type Query {
    students: [Student]
  }

  input StdInput {
    id: Int
    name: String
    email: String
    age: Int
  }

  type Mutation {
    addStudent(input: StdInput): Student
  }
`;

const resolvers = {
  Query: {
    students: () => students,
  },
  Mutation: {
    addStudent: (_, { input }) => {
      console.log(input);
      return input;
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
