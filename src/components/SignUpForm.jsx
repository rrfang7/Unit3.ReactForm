import { useState } from "react"



export default function SignUpForm({token, setToken}) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(null)

    async function handleSubmit(event) {
        event.preventDefault();

        try {
            const response = await fetch("https://fsa-jwt-practice.herokuapp.com/signup",{
              method: "POST",
              headers:{
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                username: username,
                password: "fgawe"
              })
            })
            if(username.length ===8){
              const result = await response.json();
              setToken(result.token);
            }else{
              alert("username must be eight characters")
            }
            
            //console.log(result)
        } catch (error) {
            console.error(error)
            setError(error.message)
        }
        
    }

    return (
     <>
       <h2>Sign Up</h2> 
       {error && <p>{error}</p>}
        <form onSubmit={handleSubmit}>
          <label>
            Username: <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
          </label>
          <label>
           Password: <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
          </label>
          <button>Submit</button>
        </form>
     </>
   
    )
}