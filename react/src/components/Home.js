import React, {useContext} from 'react'
import {MyContext} from '../contexts/MyContext'

import Login from './Login'
import Register from './Register'

function Home(){

    const {rootState,logoutUser} = useContext(MyContext);
    const {isAuth,theUser,showLogin} = rootState;

    
    if(isAuth)
    {
        return(
            <div className="userInfo">
                <h1>{theUser.name}</h1>
                <div className="_email"><span>{theUser.email}</span></div>
                <button onClick={logoutUser}>Logout</button>
            </div>
        )
    }
    
    else if(showLogin){
        return <Login/>;
    }
    else{
        return <Register/>;
    }
}
export default Home;