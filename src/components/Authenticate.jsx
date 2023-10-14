import { useState } from "react";

export default function Authenticate({token, setToken}) {
    const [successMessage,setSuccessMessage]= useState(null)
    const [error,setError]=useState(null)
    // do we need to pass in event here?
    async function handleClick(){
        //event.preventdefault();
        try {
            const response = await fetch("https://fsa-jwt-practice.herokuapp.com/authenticate",{
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            })
            const result = await response.json();
            console.log(result.data)
            setSuccessMessage(result.message+'Your username is: '+result.data.username)
        } catch (error) {
            console.log(error)
            setError(error.message)
        }
    }
    return (
        <>
            <h2>Authenticate</h2>
            {/* use ternary just one line instead of
            {successMessage && <p>{successMessage}</p>}
            {error && <p>{error}</p>} 
            */}
            {error? <p>{error}</p>: <p>{successMessage}</p>}
            <button className='authenticateButton'onClick={handleClick}>Authenticate Token!!</button>
        </>
    )
}
// {false && true}  {a && b} will never run,   it has to be both true, so if error is true, then we render
//if error is false, meaning, no error, then we don't render 

