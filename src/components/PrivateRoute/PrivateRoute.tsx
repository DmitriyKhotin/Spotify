import React, { FC, createElement, ReactNode } from 'react'
import { Route, Redirect } from 'react-router-dom'
import {paths} from '@config/routes'

const PrivateRoute: FC<{children: ReactNode, path: string, exact: boolean}> = ({children, ...rest}) => {

  return (
    // <Route
    //   {...rest}
    //   render={
    //     (props: any) =>
    //     localStorage.getItem('token')
    //       ? createElement(component, props)
    //       : <Redirect to={paths.LOGIN} />
    //   }
    // />
    <Route {...rest}>
      {
        localStorage.getItem('token')
          ? children
          : <Redirect to={paths.LOGIN}/>
      }
    </Route>
  )
}

export default PrivateRoute