import React, { useEffect, useState } from 'react'

function Home() {
    const [user, setuser] = useState('')
    useEffect(() => {
        setuser(JSON.parse(localStorage.getItem('user')));
    }, [])

    const logout = ()=>{
        localStorage.clear('user');
        // location.reload();
    }
    return (
        <div>{user.displayName}
        {user.email}
            <button onClick={logout()}>Logout</button>
        </div>
    )
}

export default Home