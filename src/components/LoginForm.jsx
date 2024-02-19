import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";
import { getAuth, signInWithEmailAndPassword  } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { useState } from "react";
import { NavLink, useNavigate } from 'react-router-dom';

    const firebaseConfig = {
    apiKey: "AIzaSyBvjVEjyPTG7evBoQGSNm2mGyp4gOf0CiE",
    authDomain: "project-t-6f743.firebaseapp.com",
    databaseURL: "https://project-t-6f743-default-rtdb.firebaseio.com",
    projectId: "project-t-6f743",
    storageBucket: "project-t-6f743.appspot.com",
    messagingSenderId: "909478904512",
    appId: "1:909478904512:web:4271f7fc01afb68c312325",
    measurementId: "G-V0WK3F2ZFB"
  };

// Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth(app);
  const database = getDatabase(app);

const LoginForm = () => {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
       
    const onLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user);
            
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
        });
    }

    return (
        <>
            <div className="container my-5">
            <h1>Sign Up</h1>
            <div className="col-lg-8 px-0">
                <form id="MainForm" onSubmit={LoginForm}>
                    <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="emailInput" placeholder="name@mail.com" 
                    onChange={event => setEmail(event.target.value)}/>
                    <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating mb-3">
                    <input type="password" className="form-control" id="passwordInput" placeholder="Password" 
                    onChange={event => setPassword(event.target.value)}/>
                    <label htmlFor="floatingPassword">Password</label>
                    </div>
                    <div className="form-floating mb-3">
                    <button type="submit" className="btn btn-primary" style={{"float": "right", "marginTop": "12px"}}>Login</button>
                    </div>
                </form>
                <p className="text-sm text-white text-center">
                    No account yet? {' '}
                    <NavLink to="/RegisterForm">
                        Sign up
                    </NavLink>
                </p>    
            </div>
            </div>
        </>
    )
}

export default LoginForm;