const {
    Environment,
    Network,
    RecordSource,
    Store,
} = require('relay-runtime');

const store = new Store(new RecordSource())

const network = Network.create((operation, variables) => {
    // 4
    return fetch('http://localhost:4000/graphql', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': "Bearer "+localStorage.getItem("Bearer")
      },
      body: JSON.stringify({
        query: operation.text,
        variables,
      }),
    }).then(response => {
      return response.json()
    })
  })

  const environment = new Environment({
    network,
    store,
  })

  export default environment
