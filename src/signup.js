import 'bootstrap/dist/css/bootstrap.min.css';
import image from './businesspeople-meeting-office-working_23-2148908922.avif';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import React, { useState, useRef } from 'react';

const Signup = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [errMsg, setErrMsg] = React.useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://project-planner-server2.onrender.com/signup', {
        email,
        password,
        confirmPassword,
      });

      console.log(response.data); // Handle the response as needed

      // Redirect to the Kanban page on successful signup
      navigate('/login');
    } catch (err) {
      if (!err?.response) {
        alert('No Server Response');
      } else if (err.response?.status === 400) {
        alert('Email already in use');
      } else {
        alert('Signup Failed');
      }
      console.error('Error:', err.response.data); // Log the error for debugging
    }
  };

  return (
  
    <section className="vh" style={{ background: 'linear-gradient(to right, #A9F1DF , #FFBBBB)', color: 'black',height: '100vh' }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-50">
          <div className="col col-xl-10">
            <div className="card" style={{ borderRadius: '1rem' }}>
              <div className="row g-0" style={{ background: 'linear-gradient(to right, #A9F1DF , #FFBBBB)', borderRadius: '1rem' }}>
                <div className="col-md-6 col-lg-5 d-none d-md-block">
                  <img
                    src={image}
                    alt="login form"
                    className="img-fluid"
                    style={{ borderRadius: '1rem 0 0 1rem', height: '100%', width: '100%' }}
                  />
                </div>
                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                  <div className="card-body p-4 p-lg-5 text-black">
                    <form onSubmit={handleSubmit}>
                      <h4 className="fw-normal mb-3 pb-3" style={{ letterSpacing: '1px', color: 'black', fontSize: '30px', fontFamily: 'TimesNewRoman', textAlign: 'center' }}>
                        CREATE YOUR ACCOUNT
                      </h4>
                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form2Example17" style={{ letterSpacing: '1px', color: 'black', fontSize: '20px', fontFamily: 'TimesNewRoman', textAlign: 'center' }}>
                          Email address
                        </label>
                        <input
                          type="email"
                          id="form2Example17"
                          className="form-control form-control-lg"
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>
                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form2Example27" style={{ letterSpacing: '1px', color: 'black', fontSize: '20px', fontFamily: 'TimesNewRoman', textAlign: 'center' }}>
                          Password
                        </label>
                        <input
                          type="password"
                          id="form2Example27"
                          className="form-control form-control-lg"
                          onChange={(e) => setPassword(e.target.value)}
                          required
                        />
                      </div>
                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form2Example28" style={{ letterSpacing: '1px', color: 'black', fontSize: '20px', fontFamily: 'TimesNewRoman', textAlign: 'center' }}>
                          Confirm Password
                        </label>
                        <input
                          type="password"
                          id="form2Example28"
                          className="form-control form-control-lg"
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          required
                        />
                      </div>
                      <div className="pt-1 mb-4">
                        <button
                          className="btn btn-dark btn-lg btn-block"
                          type="submit"
                          style={{ width: '100%', boxShadow: '0px 0px 0px 2px grey', fontFamily: 'TimesNewRoman', fontSize: '20px' }}
                        >
                          Sign Up
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
