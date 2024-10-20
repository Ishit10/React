import React, { useState } from 'react';

function Form() {
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [number, setNumber] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState({});
    const [submitData, setSubmitData] = useState(null);

    function handleSubmit(e) {
        e.preventDefault();

        if (validation()) {
            let userData = {
                firstName: firstName,
                lastName: lastName,
                email: email,
                number: number,
                password: password,
            };

            console.log(userData);
            setSubmitData(userData);


            setFirstName("");
            setLastName("");
            setEmail("");
            setNumber("");
            setPassword("");
        }
    }

    function validation() {
        let isValid = true;
        let errors = {};

        if (!firstName.trim()) {
            errors.firstName = "First name is required";
            isValid = false;
        }

        if (!lastName.trim()) {
            errors.lastName = "Last name is required";
            isValid = false;
        }

        if (!email.trim()) {
            errors.email = "Email is required";
            isValid = false;
        }

        if (!number.trim()) {
            errors.number = "Phone number is required";
            isValid = false;
        } else if (isNaN(number)) {
            errors.number = "Phone number must be numeric";
            isValid = false;
        }

        if (!password.trim()) {
            errors.password = "Password is required";
            isValid = false;
        }

        setError(errors);
        return isValid;
    }

    return (
        <>
            <section className='bg-danger-subtle'>
                <div className='container p-5 bg-danger-subtle d-flex flex-column gap-5'>
                    <h2 className='text-decoration-underline'>Personal Info</h2>

                    <form className='p-5 bg-info-subtle' onSubmit={handleSubmit}>


                        <div className="mb-3 d-flex flex-column">
                            <label className="form-label">First Name</label>
                            <input
                                value={firstName}
                                type="text"
                                className="form-control w-50 border-2"
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                            {error.firstName && <span className='p-1 text-center rounded-3' style={{ backgroundColor: "red", width: "200px", color: "white" }}>{error.firstName}</span>}
                        </div>


                        <div className="mb-3 d-flex flex-column">
                            <label className="form-label">Last Name</label>
                            <input
                                value={lastName}
                                type="text"
                                className="form-control w-50 border-2"
                                onChange={(e) => setLastName(e.target.value)}
                            />
                            {error.lastName && <span className='p-1 text-center rounded-3' style={{ backgroundColor: "red", width: "200px", color: "white" }}>{error.lastName}</span>}
                        </div>


                        <div className="mb-3 d-flex flex-column">
                            <label className="form-label">Email address</label>
                            <input
                                value={email}
                                type="email"
                                className="form-control w-50 border-2"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            {error.email && <span className='p-1 text-center rounded-3' style={{ backgroundColor: "red", width: "200px", color: "white" }}>{error.email}</span>}
                        </div>


                        <div className="mb-3 d-flex flex-column">
                            <label className="form-label">Number</label>
                            <input
                                value={number}
                                type="text"
                                className="form-control w-50 border-2"
                                onChange={(e) => setNumber(e.target.value)}
                            />
                            {error.number && <span className='p-1 text-center rounded-3' style={{ backgroundColor: "red", width: "200px", color: "white" }}>{error.number}</span>}
                        </div>


                        <div className="mb-3 d-flex flex-column">
                            <label className="form-label">Password</label>
                            <input
                                value={password}
                                type="password"
                                className="form-control w-50 border-2"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            {error.password && <span className='p-1 text-center rounded-3' style={{ backgroundColor: "red", width: "200px", color: "white" }}>{error.password}</span>}
                        </div>

                        <div className="mb-3">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">Textarea</label>
                            <textarea className="form-control w-50 border-2" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>

                        <div className="col-auto">
                            <button type="submit" className="btn btn-primary mb-3">Confirm identity</button>
                        </div>

                    </form>
                </div>


                {submitData && (
                    <div className="container mt-5">
                        <h3>Submitted Data</h3>
                        <p><strong>First Name:</strong> {submitData.firstName}</p>
                        <p><strong>Last Name:</strong> {submitData.lastName}</p>
                        <p><strong>Email:</strong> {submitData.email}</p>
                        <p><strong>Phone Number:</strong> {submitData.number}</p>
                        <p><strong>Password:</strong> {submitData.password}</p>
                    </div>
                )}
            </section>
        </>
    );
}

export default Form;



