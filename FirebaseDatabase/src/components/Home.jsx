import React, { useEffect, useState } from 'react';

function Home() {
    const [user, setUser] = useState('');

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const logout = () => {
        localStorage.clear('user');
        window.location.reload(); // Refresh the page after logout
    };

    return (
        <div className="container text-center" style={{ marginTop: '20vh' }}>
            <div className="card shadow-sm p-4" style={{ maxWidth: '400px', margin: '0 auto' }}>
                <div className="card-body">
                    <img
                        src={user.photoURL || 'https://via.placeholder.com/150'}
                        alt="User Avatar"
                        className="rounded-circle mb-3"
                        style={{ width: '100px', height: '100px' }}
                    />
                    <h5 className="card-title">{user.displayName || 'Guest'}</h5>
                    <p className="card-text text-muted">{user.email || 'No Email Provided'}</p>
                    <button 
                        className="btn btn-danger mt-3" 
                        onClick={logout}
                    >
                        Logout
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Home;
