import React, { FC } from 'react'

import './SignInButton.scss'
import { authHref } from '@config/appData'

const SignInButton: FC = () => {
  const logIn = () => {
    window.location.href = authHref
  }

  return (
    <button className="signInButton" onClick={logIn}>
      <p className="signInButton__title">Sign in</p>
    </button>
  )
}

export default SignInButton
