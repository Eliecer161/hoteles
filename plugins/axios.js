function getToken(firebase) {
  return new Promise((resolve, reject) => {
    const unsubscribe = firebase.onAuthStateChanged(async (user) => {
      unsubscribe()
      if (user) {
        resolve(await user.getIdToken(true))
      } else {
        resolve()
      }
    }, reject)
  })
}

export default function ({ $axios, $fireAuth }) {
  $axios.onRequest(async (config) => {
    config.baseURL = process.env.API_URL
    const token = await getToken($fireAuth)
    if (token) {
      config.headers.Authorization = token
    }
    return config
  })
  $axios.onError((error) => {
    throw error.response.data
  })
}
