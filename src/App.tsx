import React, { FC } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import StartPage from './pages/StartPage'
import MainPage from '@pages/MainPage'
import {paths} from '@config/routes'

const App: FC = () => {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={paths.LOGIN} component={StartPage} />
        <Route path={paths.ROOT} component={MainPage}/>
        {!localStorage.getItem('token') && <Redirect to={paths.LOGIN}/>}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
