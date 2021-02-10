type App = {
  client_id: string
  response_type: string
  redirect_uri: string
  scope: string
}

export const app: App = {
  client_id: '2314c60c89c345ddadf5827a04c3fc76',
  response_type: 'token',
  redirect_uri: 'http://localhost:3000',
  scope: 'user-read-email user-read-private user-library-read',
}

export const signIn_href: string = `https://accounts.spotify.com/authorize?client_id=${app.client_id}&redirect_uri=${encodeURIComponent(app.redirect_uri)}&scope=${encodeURIComponent(app.scope)}&response_type=${app.response_type}`