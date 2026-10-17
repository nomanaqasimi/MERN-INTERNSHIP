import { useState } from 'react';
import './App.css';

function LoginForm() {
    const [username, setUsername] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (username.trim() !== "") {
            setIsLoggedIn(true);
        }
        else{
            alert("please enter a username")
        }
    };

    return (
        <>
            {!isLoggedIn && (
                <form onSubmit={handleSubmit}>
                    <div className="container">
                        <h1>Login</h1>
                        <input 
                            type="text" 
                            placeholder="Username" 
                            value={username}
                            onChange={(e) => setUsername(e.target.value)} 
                        />
                        <button type='submit'>Login</button>
                    </div>
                </form>
            )}
            
            {isLoggedIn && (
                <div className="container">
                    <h1>{`Welcome, ${username}`}</h1>
                </div>
            )}
        </>
    );
}

export default LoginForm;