
import './App.css'
import { signInWithPopup } from 'firebase/auth'
import { auth, provider } from './cinfiger/firebase'

function App() {

  function GoogleAuth(){
    signInWithPopup(auth, provider).then((res) => {
      console.log(res);

      
    }).catch((err)=>{
      console.log(err);
      
    })
  }
  

  return (
    <>
      <button onClick={GoogleAuth}>Google Login</button>
    </>
  )
}

export default App
