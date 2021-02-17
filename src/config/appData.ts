type App = {
  client_id: string
  response_type: string
  redirect_uri: string
  scope: string
}

const scope = ['user-read-email', 'user-read-private', 'user-library-read', 'user-top-read']
export const app: App = {
  client_id: '2314c60c89c345ddadf5827a04c3fc76',
  response_type: 'token',
  redirect_uri: 'http://localhost:3000',
  scope: scope.join(' '),
}

export const authHref: string = `https://accounts.spotify.com/authorize?client_id=${app.client_id}&redirect_uri=${encodeURIComponent(app.redirect_uri)}&scope=${encodeURIComponent(app.scope)}&response_type=${app.response_type}`

export const getToken = (hash: string): string => {
  const array: RegExpMatchArray | null = hash.match(/[^=^\s^&]+/g)
  if (array)
    return array[1]
  else
    return ''
}