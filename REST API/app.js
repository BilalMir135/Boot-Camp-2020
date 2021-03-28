//REST API using Fetch
console.log('Fetch API');

//to get data from api
const getAPI = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  console.log(response, 'Response');
  console.log(await response.json(), 'Response in JSON');
};

//getAPI();

//to post data through api
const postAPI = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST', //default method is get
    body: JSON.stringify({
      title: 'REST API ',
      body: 'Using Fetch',
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  console.log(response, 'Response');
  console.log(await response.json(), 'Response in JSON');
};

postAPI();
