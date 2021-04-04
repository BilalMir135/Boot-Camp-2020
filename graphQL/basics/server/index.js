const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./Schemas');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true, //graphql interface
  })
);

app.listen(PORT, () => console.log(`Server started at port ${PORT}`));
