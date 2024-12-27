import { signInWithPopup } from 'firebase/auth';
import './App.css';
import { useEffect, useState } from 'react';
import Home from './components/Home';
import { auth, provider } from './configer/Firebase';

function App() {
  const [data, setData] = useState('');
  const [loading, setLoading] = useState(false);

  const GoogleAuth = () => {
    setLoading(true); // Show loading spinner
    signInWithPopup(auth, provider)
      .then((res) => {
        console.log(res.user);
        setData(res.user);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    if (data) {
      localStorage.setItem('user', JSON.stringify(data));
    }
  }, [data]);

  return (
    <div className="container text-center" style={{ marginTop: '20vh' }}>
      {data === '' ? (
        <div>
          <h1 className="display-4 mb-4">Welcome to My App</h1>
          <p className="lead mb-4">Sign in to continue</p>
          {loading ? (
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          ) : (
            <button
              className="btn btn-primary btn-lg"
              onClick={GoogleAuth}
            >
              <i className="bi bi-google me-2"></i> Sign in with Google
            </button>
          )}
        </div>
      ) : (
        <Home />
      )}
    </div>
  );
}

export default App;
