import axios from "axios"
import { useEffect, useState } from "react"

const useToken = user =>{
    const [token, setToken] = useState('')
    useEffect(() => {
        console.log(user);
        const email = user?.user?.email;
      const getToken = async() => {
        const { data } = await axios.post(
            "https://fathomless-sierra-36634.herokuapp.com/login",
            { email }
            );
            setToken(data.accessToken)
            localStorage.setItem("accessToken", data.accessToken);
      }
      getToken();
    },[user])
    return [token]
}

export default useToken;