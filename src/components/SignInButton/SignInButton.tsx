import React, {FC, memo} from 'react'
import './SignInButton.scss'
import {token_href} from "@config/appData";


const SignInButton: FC = () => {

  const logIn = () => {
    window.location.href = token_href
    // window.history.replaceState(null, 'Spotify Mini', '/')
  }

  return (
    <button className="signInButton" onClick={logIn}>
      <p className="signInButton__title">Sign in</p>
    </button>
  )
}

export default memo<FC>(SignInButton)