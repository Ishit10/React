import { signInWithPopup } from 'firebase/auth';
import './App.css'
import { auth, provider } from './cinfiger/firebase'
import { useEffect, useState } from 'react';
import Home from './components/Home';

function App() {
  const [data, setData] = useState('');

  const GoogleAuth = () => {
    signInWithPopup(auth, provider)
      .then((res) => {
        console.log(res.user);
        setData(res.user);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
      localStorage.setItem('user', JSON.stringify(data));
  }, [data]);

  return (
    <>
      {data == ''?
        <button onClick={GoogleAuth}>Google Login</button>
      : <Home/>}
        
    </>
  );
}

export default App;