import React from 'react'
import Card from './Card'
import b1 from '../assets/b1.jpg'
import b2 from '../assets/b2.jpg'
import b3 from '../assets/b3.jpg'
import b4 from '../assets/b4.jpg'

function Caedbody() {
  return (
    <>
    <div className='container-fluid'>
        <div className='container p-5'>
            <div className='row'>
                <div className='col'><Card title="Batman" img={b1}/></div>
                <div className='col'><Card title="Ironman" img={b2}/></div>
                <div className='col'><Card title="Deadpool & Wolverine" img={b3}/></div>
                <div className='col'><Card title="Spiderman" img={b4}/></div>

            </div>
        </div>  
    </div>
    
    </>
  )
}

export default Caedbody