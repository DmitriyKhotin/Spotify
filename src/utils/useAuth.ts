import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import store from '@store/RootStore'

import { paths } from '../config/routes'

import { StatusCode } from './apiTypes'

const useAuth = () => {
  const history = useHistory()

  useEffect(() => {
    if (store.userStore.errorCode === StatusCode.unauthorized) {
      localStorage.removeItem('token')
      history.push(paths.LOGIN)
    }
  }, [store.userStore.errorCode])
}

export default useAuth
