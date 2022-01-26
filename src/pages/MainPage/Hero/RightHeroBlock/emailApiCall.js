export const postUser = (body) => {
  return fetch(
    'https://backend-dev.litgateway.com/users/subscribeToMailingList',
    {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  ).then((response) => {
    console.log('CHeck response', response)
    return response.json()
  })
}
