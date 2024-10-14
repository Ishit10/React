// import React, { useState } from 'react'

// function form() {

//     const [firstInput, setfirstInput] = useState("");
//     const [lastInput, setlastInput] = useState("");
//     const [emailInput, setemailInput] = useState("");
//     const [numberInput, setnumberInput] = useState("");
//     const [submitted, setSubmitted] = useState(false);


//     const handleSubmit = (e) => {
//       e.preventDefault();
//       setSubmitted(true); 
//     };
  

//   return (
//     <>
//     <section className='container-fluid bg-black'>
//     <div className='container p-5 bg-gradient w-75'>
//         <h1 className='text-danger text-decoration-underline '>Fill the details</h1>
//     <form className='text-white'>
//   <div className="mb-3">
//     <label htmlFor="exampleInputEmail1" className="form-label">
//       First Name
//     </label>
//     <input
//       type="text"
//       className="form-control w-50"
//       id="exampleInputEmail1"
//       aria-describedby="emailHelp"
//       value={firstInput}
//       onChange={(e) => setfirstInput(e.target.value)}
//     />
//   </div>
//   <div className="mb-3">
//     <label htmlFor="exampleInputPassword1" className="form-label">
//       Last Name
//     </label>
//     <input
//       type="text"
//       className="form-control w-50"
//       id="exampleInputPassword1"
//       value={lastInput}
//       onChange={(e) => setlastInput(e.target.value)}
//     />
//   </div>
//   <div className="mb-3">
//     <label htmlFor="exampleInputPassword1" className="form-label">
//       Email Address
//     </label>
//     <input
//       type="email"
//       className="form-control w-50"
//       id="exampleInputPassword1"
//       value={emailInput}
//       onChange={(e) => setemailInput(e.target.value)}
//     />
//   </div>
//   <div className="mb-3">
//     <label htmlFor="exampleInputPassword1" className="form-label">
//       Phone Number
//     </label>
//     <input
//       type="number"
//       className="form-control w-50"
//       id="exampleInputPassword1"
//       value={numberInput}
//       onChange={(e) => setnumberInput(e.target.value)}
//     />
//   </div>
//   <div className="mb-3">
//     <label htmlFor="exampleInputPassword1" className="form-label">
//       Password
//     </label>
//     <input
//       type="password"
//       className="form-control w-50"
//       id="exampleInputPassword1"
//     />
//   </div>
//   <div className="mb-3 form-check">
//     <input type="checkbox" className="form-check-input" id="exampleCheck1" />
//     <label className="form-check-label" htmlFor="exampleCheck1">
//       Check me out
//     </label>
//   </div>
//   <button type="submit" className="btn btn-primary">
//     Submit
//   </button>
// </form>


// {submitted && (
//             <div className='para py-3 bg-danger mt-3'>
//               <h2 className='fs-5 text-white'>
//                 Hello, sir my name is {firstInput} {lastInput}
//               </h2>
//               <p className='text-white'>
//                 My E-mail id is {emailInput}
//               </p>
//               <p className='text-white'>
//                 My Phone Number is {numberInput}
//               </p>
//             </div>
//           )}
//     </div>
//     </section>

    
//     </>
//   )
// }

// export default form




import React, { useState } from 'react';

function Form() {
  const [firstInput, setFirstInput] = useState("");
  const [lastInput, setLastInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [numberInput, setNumberInput] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <section className='container-fluid bg-black'>
        <div className='container p-5 bg-gradient w-75'>
          <h1 className='text-danger text-decoration-underline '>Fill the details</h1>
          <form className='text-white' onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="firstName" className="form-label">
                First Name
              </label>
              <input
                type="text"
                className="form-control w-50"
                id="firstName"
                value={firstInput}
                onChange={(e) => setFirstInput(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="lastName" className="form-label">
                Last Name
              </label>
              <input
                type="text"
                className="form-control w-50"
                id="lastName"
                value={lastInput}
                onChange={(e) => setLastInput(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email Address
              </label>
              <input
                type="email"
                className="form-control w-50"
                id="email"
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="phoneNumber" className="form-label">
                Phone Number
              </label>
              <input
                type="number"
                className="form-control w-50"
                id="phoneNumber"
                value={numberInput}
                onChange={(e) => setNumberInput(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control w-50"
                id="password"
              />
            </div>
            <div className="mb-3 form-check">
              <input type="checkbox" className="form-check-input" id="exampleCheck1" />
              <label className="form-check-label" htmlFor="exampleCheck1">
                Check me out
              </label>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>

          {submitted && (
            <div className='para px-3 py-3 bg-danger mt-3'>
              <h4 className=' text-white'>
                Hello, sir my name is {firstInput} {lastInput}
              </h4>
              <p className='text-white'>
                My E-mail id is {emailInput}
              </p>
              <p className='text-white'>
                My Phone Number is {numberInput}
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default Form;
