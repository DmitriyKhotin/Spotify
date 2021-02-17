import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import store from '@store/UserStore'
import { StatusCode } from './apiTypes'
import { paths } from '../config/routes'

const useAuth = () => {
  const history = useHistory()

  useEffect(() => {
    if (store.errorCode === StatusCode.unauthorized) {
      localStorage.removeItem('token')
      history.push(paths.LOGIN)
    }
  }, [store.errorCode])
}

export default useAuth
