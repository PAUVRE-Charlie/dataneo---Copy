import React, { useState, useEffect } from 'react'
import { useAuth } from './Auth'
import { Route, Redirect } from 'react-router-dom'
import Cookies from 'js-cookie'

const PrivateRoute = ({ children, ...rest }) => {
  const auth = useAuth()
  const [ready, setReady] = useState(false)

  useEffect(async _ => {
    if( !auth.user ) {
      let user = null
        const token = Cookies.get('token')
        console.log(token);
      if( token ) {
        user = {}
        user.token = token;
        user.role = 'admin';
        user.structure = 'plate';
        user.name = 'Didier Vilbrequin';
        user.job = 'Gestionnaire de concession';
        user.picture = ''
      }
      if( user ) auth.setUser(user)
    }
    setReady(true)
  }, [])

  return ready ? <Route {...rest} render={
    ({ location }) => {
      if( auth.user ) {
        //if( location.pathname !== '/' && !auth.user.isCompleted ) return <Redirect to={{ pathname: '/', state: { from: location } }} />
        return children
      }
      else return <Redirect to={{ pathname: '/login', state: { from: location } }} />
    }
  } /> : <></>
}

export default PrivateRoute