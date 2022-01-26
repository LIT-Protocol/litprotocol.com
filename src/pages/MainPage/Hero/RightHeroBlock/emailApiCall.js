export const postUser = (body) => {
  return fetch('https://backend-dev.litgateway.com/saveSubscribe', {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  }).then((response) => response.json())
}
