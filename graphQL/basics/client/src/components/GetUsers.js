import { useEffect } from 'react';
import { useQuery, gql } from '@apollo/client';

import { LOAD_USERS } from '../graphql/queries';

const GetUsers = () => {
  const { error, loading, data } = useQuery(LOAD_USERS);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return <div></div>;
};

export default GetUsers;
