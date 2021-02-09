import React, {FC} from 'react'
import Searcher from '@components/Searcher'
import SideBar from '@components/SideBar'
import ProfileBar from '@components/ProfileBar'
import MiniLogo from '@components/MiniLogo'
import './MainPage.scss'

const MainPage: FC = () => {

  return (
    <>
      <div className="header">
        <div className="flex">
          <div className="header__logo">
            <MiniLogo/>
          </div>
          <Searcher/>
        </div>
        <ProfileBar/>
      </div>
      <div className="main">
        <SideBar/>
        <div className="main__delimiter"/>
      </div>
    </>
  );
}

export default MainPage;
