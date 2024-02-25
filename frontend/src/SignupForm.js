import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const SignupForm = () => {
    const [email, setEmail] = useState('');
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [zipcode, setZipcode] = useState('');
    const [state, setState] = useState('');
    const [userCount, setUserCount] = useState(0);
    const [errors, setErrors] = useState({});

    useEffect(() => {
        axios.get('/api/user-count/')
            .then(response => {
                setUserCount(response.data.user_count);
            })
            .catch(error => {
                console.error("Could not fetch user count", error);
            });
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('/dj-rest-auth/registration/', {
            email,
            password1,
            password2,
            first_name: firstName,
            last_name: lastName,
            phone_number: phoneNumber,
            zipcode,
            state
        })
        .then(response => {
            console.log("Signup successful", response.data);
            setUserCount(prevCount => prevCount + 1);
            setErrors({}); // Clear any previous errors
        })
        .catch(error => {
            console.error("Signup error", error.response.data);
            setErrors(error.response.data); // Set errors from backend
        });
    };

    return (
        <div className="container mt-5">
            <div className="card p-4">
                <h2 className="mb-4">Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    {/* Each form group with added error display */}
                    <div className="form-group">
                        <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
                        {errors.email && <div className="text-danger">{errors.email}</div>}
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" value={password1} onChange={(e) => setPassword1(e.target.value)} placeholder="Password" required />
                        {errors.password1 && <div className="text-danger">{errors.password1}</div>}
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" value={password2} onChange={(e) => setPassword2(e.target.value)} placeholder="Confirm Password" required />
                        {errors.password2 && <div className="text-danger">{errors.password2}</div>}
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="First Name" required />
                        {errors.first_name && <div className="text-danger">{errors.first_name}</div>}
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Last Name" required />
                        {errors.last_name && <div className="text-danger">{errors.last_name}</div>}
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder="Phone Number" required />
                        {errors.phone_number && <div className="text-danger">{errors.phone_number}</div>}
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" value={zipcode} onChange={(e) => setZipcode(e.target.value)} placeholder="Zipcode" required />
                        {errors.zipcode && <div className="text-danger">{errors.zipcode}</div>}
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" value={state} onChange={(e) => setState(e.target.value)} placeholder="State" required />
                        {errors.state && <div className="text-danger">{errors.state}</div>}
                    </div>
                    <button type="submit" className="btn btn-primary">Sign Up</button>
                </form>
                <p className="mt-4">Total Registered Users: {userCount}</p>
            </div>
        </div>
    );
};

export default SignupForm;
