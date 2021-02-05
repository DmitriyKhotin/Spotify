import React, {FC} from 'react'

const App: FC = () => {

  const logIn = () => {

    const client_id = '2314c60c89c345ddadf5827a04c3fc76'
    const response_type = 'token'
    const redirect_uri = 'http://localhost:3000'
    const scope = 'user-read-email user-read-private'
    window.location.href = `https://accounts.spotify.com/authorize?client_id=${client_id}&redirect_uri=${encodeURIComponent(redirect_uri)}&scope=${encodeURIComponent(scope)}&response_type=${response_type}`
  }

  return (
    <div>
      <button onClick={logIn}>Log in</button>
    </div>
  );
}

export default App;
