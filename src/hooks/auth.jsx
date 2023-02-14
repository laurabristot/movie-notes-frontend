import { createContext, useContext, useState, useEffect } from "react";
import { api } from "../services/api";

export const AuthContext = createContext({})

function AuthProvider({children}){
  const [data, setData] = useState({})


  async function signIn({email, password}){
    try {
      const response = await api.post("/sessions", {email, password})
      const {user, token} = response.data

      localStorage.setItem('@rocketmovies:user', JSON.stringify(user))
      localStorage.setItem('@rocketmovies:token', JSON.stringify(token))


      api.defaults.headers.authorization = `Bearer ${token}`
      setData({user, token})
    } catch (error) {
      if(error.response){
        alert(error.response.data)
      } else {
        alert('Não foi possível conectar.')
      }
    }
  }

  async function signOut(){
    const token = localStorage.removeItem("@rocketmovies:token")
    const user = localStorage.removeItem("@rocketmovies:user")
    setData({})
  }

    useEffect(()=> {
      const token = localStorage.getItem("@rocketnotes:token")
      const user = localStorage.getItem("@rocketnotes:user")

      if(token && user){
        api.defaults.headers.authorization = `Bearer ${token}`

        setData({
          token, 
          user: JSON.parse(user)
        })

      }
    }, [])

  return (
    <AuthContext.Provider value={{ 
      signIn,
      signOut,
      user: data.user}}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth(){
  const context = useContext(AuthContext)
  return context
}

export {
  AuthProvider,
  useAuth
}