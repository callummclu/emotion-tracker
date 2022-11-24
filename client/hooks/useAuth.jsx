import React, {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useMemo,
    useState,
  } from "react";
  import { AsyncStorage } from "react-native";

import * as SessionsApi from  '../api/sessions'
import * as UsersApi from '../api/users'


const AuthContext = createContext({})

export function AuthProvider({children}){
    const [user, setUser] = useState()
    const [loggedIn, setLoggedIn] = useState(false)
    const [error,setError] = useState()
    const [loading, setLoading] = useState(false)
    const [loadingInitial, setLoadingInitial] = useState(true)

    useEffect(()=>{
        if (error) setError(null)
    },[window.location.pathname])

    useEffect(() => {
        UsersApi.checkAuth()
            .then(async (res) => {
                let res_json = await res.json()
                setLoggedIn(res_json.isAuthenticated)
                UsersApi.getUserDetails(res_json.username)
                    .then(async (res) => {
                        let res_json = await res.json()
                        setUser(res_json.data)
                    })
            })
            .catch((_errpr)=>{})
            .finally(()=> setLoadingInitial(false))
    },[])

    function reload(){
        setLoading(true)
        UsersApi.checkAuth()
            .then(async (res) => {
                let res_json = await res.json()
                setLoggedIn(res_json.isAuthenticated)
                UsersApi.getUserDetails(res_json.username)
                    .then(async (res) => {
                        let res_json = await res.json()
                        setUser(res_json.data)
                    })
            })
            .catch((_error)=>{})
            .finally(()=>setLoading(false))
    }

    function login({username,password}){
        setLoading(true)
        SessionsApi.login({username,password})
            .then(async (res) => {
                let res_json = await res.json()
                if (!Object.hasOwn(res_json,'error')){
                    AsyncStorage.setItem("gocial_auth_token",res_json.token)
                    UsersApi.checkAuth()
                        .then(async (res) => {
                            let res_json = await res.json()
                            setLoggedIn(res_json.isAuthenticated)
                            UsersApi.getUserDetails(res_json.username)
                                .then(async (res) => {
                                    let res_json = await res.json()
                                    setUser(res_json.data)
                                })
                        })
                        .catch((_error)=>{})
                } else {
                    setError(res_json.error)
                }
            }).catch((error)=>{
                setError(error)
            }).finally(()=>setLoading(false))
    }

    function signUp(signupParams){
        setLoading(true)

        UsersApi.signup(signupParams)
        .then(async (res) => {
            let res_json = await res.json()
            if (Object.hasOwn(res_json,'error')){
                setError(res_json.error)
            } else {
                return login({username:signupParams.username,password:signupParams.password})
            }
        }).catch((error)=>{
            setError(error)
        }).finally(()=> setLoading(false))
    }

    function logout(){
        SessionsApi.logOut().then(()=>setUser(undefined))
    }

    const memoedValue = useMemo(
        () => ({
            user,
            loading,
            login,
            signUp,
            logout,
            loggedIn,
            reload
        }),
        [user,loading,error]
    )

    return (
        <AuthContext.Provider value={memoedValue}>
            {!loadingInitial && children}
        </AuthContext.Provider>
    )
}

export default function useAuth() {
    return useContext(AuthContext)
}