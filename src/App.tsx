import React, {FC} from 'react'
import { BrowserRouter, Route, Switch, Redirect, useHistory } from 'react-router-dom'
import StartPage from "@pages/StartPage";
import MainPage from "@pages/MainPage";
import {Paths} from "@config/routes";

const App: FC = () => {
  // const history = useHistory<History>()
  // console.log(history)
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={Paths.LOGIN} component={StartPage} />
        <Route path={Paths.ROOT} component={MainPage}/>
        {!localStorage.getItem('token') && <Redirect to={Paths.LOGIN}/>}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
