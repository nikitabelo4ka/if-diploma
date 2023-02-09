export const getSubscriptionMessage = (body) => {
    return fetch('https://if-modnikky-api.onrender.com/api/subscription', {
        method: 'POST',
        body: JSON.stringify({ email: body }),
        headers: {
          'Content-type': 'application/json',
        },
      })
}

export const sendOrder = (body) => {
    return fetch('https://if-modnikky-api.onrender.com/api/cart', {
        method: 'POST',
        body: JSON.stringify({ products: body }),
        headers: {
          'Content-type': 'application/json',
        },
      })
}

export const getItems = () => fetch('https://if-fox-library-api.onrender.com/api/library');
