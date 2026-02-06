import { useContext } from "react"
import { Context } from "../context/useContext"
import { useMutation } from "@tanstack/react-query";
import { loginApi } from "../api/userApi";

export const useLogin=(navigate,next)=>{
    const {login}=useContext(Context);
    return useMutation({
        mutationFn:loginApi,
        onSuccess:(data)=>{
           if(data){
            console.log("data", data)
           }
            login({
                token:data?.access,
                refresh:data?.refresh,
                user:data?.username,
            })
            console.log("login success")
            navigate(next);
        },
        onError:(error)=>{
            console.log("login error", error)
        }
    })
}