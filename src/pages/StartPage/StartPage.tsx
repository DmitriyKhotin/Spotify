import React, {FC, Fragment} from 'react'
import BigLogo from '@components/BigLogo'
import OportunityList from '@components/OportunityList'
import SignInButton from "../../components/SignInButton";
import './StartPage.scss'

const StartPage: FC = () => {
  return (
    <div className="startPage">
      <div className="startPage__logo">
        <BigLogo/>
      </div>
      <div className="startPage__body">
        <OportunityList/>
        <div className="mt-15">
          <SignInButton/>
        </div>
      </div>
    </div>
  )
}

export default StartPage