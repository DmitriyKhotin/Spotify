import React, {FC, Component, createElement} from 'react'
import { Route, Redirect } from 'react-router-dom'
import {Paths} from '@config/routes'

const PrivateRoute: FC<{component: FC, path: Paths, exact: boolean}> = ({component, ...rest}) => {

  return (
    <Route
      {...rest}
      render={
        (props: any) =>
        localStorage.getItem('token')
          ? createElement(component, props)
          : <Redirect to={Paths.LOGIN} />
      }
    />
  )
}

export default PrivateRoute