export const getSubscriptionMessage = (body) => {
    return fetch('https://modnikky-api.herokuapp.com/api/subscription', {
        method: 'POST',
        body: JSON.stringify({ email: body }),
        headers: {
          'Content-type': 'application/json',
        },
      })
}

export const sendOrder = (body) => {
    return fetch('https://modnikky-api.herokuapp.com/api/cart', {
        method: 'POST',
        body: JSON.stringify({ products: body }),
        headers: {
          'Content-type': 'application/json',
        },
      })
}

export const getItems = () => fetch('https://modnikky-api.herokuapp.com/api/catalog');
