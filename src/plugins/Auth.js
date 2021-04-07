import React, { useContext, createContext, useState } from 'react'
import Cookies from 'js-cookie'

const authContext = createContext()
const useAuthProvider = _ => {
  const [user, setUser] = useState(null)

  const response = async res => {
    if( res.status === 401 ) signOut()
    return res.status === 200 ? await res.json() : res.status === 204 ? {} : false
  }
  const headers = params => {
    const headers = params ? { 'Accept': 'application/json', 'Content-Type': 'application/json' } : {}
    if( user ) headers['Authorization'] = 'Bearer '+user.token
    return headers
  }

  const get = async route => await response(await fetch(`${process.env.REACT_APP_API_URL}/${route}`, { headers: headers(), method: 'GET' }))
  const post = async (route, params, method = 'POST') => await response(await fetch(`${process.env.REACT_APP_API_URL}/${route}`, {
    headers: headers(params), method,
    body: JSON.stringify(params)
  }))
  const put = async (route, params) => await post(route, params, 'PUT')
  const del = async (route, params) => await response(await fetch(`${process.env.API_URL}/${route}`, { headers: headers(), method: 'DELETE' }))

  const signIn = async (form, cb) => {
    const result = await post('auth', {username: form.email, password: form.password, context: 'api'})
    if( result ) {
      setUser(result)
      Cookies.set('token', result.token)
    }
    else console.log('wrong login')
    cb(result)
  }
  const signOut = cb => {
    Cookies.remove('token')
    setUser(null)
  }

  return { user, setUser, signIn, signOut, get, post, put, delete: del }
}

const AuthProvider = ({ children }) => {
  const auth = useAuthProvider()
  return (
    <authContext.Provider value={auth}>
      {children}
    </authContext.Provider>
  )
}

const useAuth = _ => useContext(authContext)

export { authContext as default, AuthProvider, useAuth }
