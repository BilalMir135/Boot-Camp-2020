import { useQuery, useMutation, gql } from '@apollo/client';

const GET_STUDENTS = gql`
  query GetAllStudents {
    students {
      id
      name
    }
  }
`;

const ADD_STUDENT = gql`
  mutation AddStudent($id: Int!, $name: String!, $email: String!, $age: Int!) {
    addStudent(input: { id: $id, name: $name, email: $email, age: $age }) {
      id
      name
    }
  }
`;

const Students = () => {
  const { loading, error, data } = useQuery(GET_STUDENTS);
  const [addStd] = useMutation(ADD_STUDENT);

  if (loading) {
    return <h1>Loading</h1>;
  }

  if (error) {
    return <h1>Error</h1>;
  }

  const { students } = data;

  const handleClick = () => {
    addStd({ variables: { id: 4, name: 'Wali', email: 'wali@gmail.com', age: 22 } });
  };

  return (
    <div>
      {students.map(student => (
        <p key={student.id}>{student.name}</p>
      ))}
      <button onClick={handleClick}>Add Student</button>
    </div>
  );
};

export default Students;
