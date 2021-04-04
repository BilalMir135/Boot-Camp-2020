const graphql = require('graphql');
const { GraphQLObjectType, GraphQLSchema, GraphQLInt, GraphQLString, GraphQLList } = graphql;

const UserType = require('./TypeDefs/UserType');
const userData = require('../MOCK_DATA.json');

const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  fields: {
    getAllUsers: {
      type: new GraphQLList(UserType),
      args: {
        id: { type: GraphQLInt },
      },
      resolve(parent, args) {
        //here we can write our logic and get data from database like .find()
        return userData;
      },
    },
  },
});

const Mutaton = new GraphQLObjectType({
  name: 'mutation',
  fields: {
    createUser: {
      type: UserType,
      args: {
        firstName: { type: GraphQLString },
        lastName: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString },
      },
      resolve(parent, args) {
        //here we can perform actions like user.create(req.body)
        userData.push({
          id: userData.length + 1,
          firstName: args.firstName,
          lastName: args.lastName,
          email: args.email,
          password: args.password,
        });

        return args;
      },
    },
  },
});

module.exports = new GraphQLSchema({ query: RootQuery, mutation: Mutaton });
