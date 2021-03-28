import { ApolloProvider } from '@apollo/client';

import { client } from './config/graphql_config';
import Students from './components/Students';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Students />
    </ApolloProvider>
  );
};

export default App;
