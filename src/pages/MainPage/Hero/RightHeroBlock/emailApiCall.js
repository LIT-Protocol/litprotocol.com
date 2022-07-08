export const postUser = (body) => {
  return fetch(
    // 'https://backend.litgateway.com/users/subscribeToMailingList',
    // 'https://backend-dev.litgateway.com/users/subscribeToMailingList',
    'http://localhost:3000/users/subscribeToMailingList',
    {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(body),
    },
  ).then((response) => {
    return response.json()
  })
}
