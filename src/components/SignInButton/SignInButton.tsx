import React, {FC, memo} from 'react'
import { useHistory } from 'react-router-dom'
import './SignInButton.scss'
import {signIn_href} from "@config/appData";


const SignInButton: FC = () => {
  const history = useHistory<History>()

  const logIn = () => {
    // history.push(signIn_href)
    window.location.href = signIn_href
  }

  return (
    <button className="signInButton" onClick={logIn}>
      <p className="signInButton__title">Sign in</p>
    </button>
  )
}

export default memo<FC>(SignInButton)