import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import image from '../3.png';

function Pricing() {
  return (
    <div style={{ backgroundColor: '#fef5eb', minHeight: '100vh' }}>
      <nav
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          background: '#fef5eb',
          height: '65px',
          padding: '0 20px',
        }}
      >
        <div>
          <img
            src={image}
            alt="Logo"
            style={{
              height: '57px',
              width: '320px',
              marginRight: '20px',
            }}
          />
        </div>
        <div>
          <button
            style={{
              backgroundColor: '#fef5eb',
              borderRadius: '4px',
              padding: '8px 20px',
              marginRight: '20px',
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={(e) => (e.target.style.opacity = 0.6)}
            onMouseLeave={(e) => (e.target.style.opacity = 1)}
          >
            <Link
              to="/"
              style={{
                textDecoration: 'none',
                color: '#111111',
                fontSize: '23px',
                fontFamily: 'SlabSerif',
              }}
            >
              Home
            </Link>
          </button>
          <button
            style={{
              backgroundColor: '#fef5eb',
              borderRadius: '4px',
              padding: '8px 20px',
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={(e) => (e.target.style.opacity = 0.6)}
            onMouseLeave={(e) => (e.target.style.opacity = 1)}
          >
            <Link
              to="/login"
              style={{
                textDecoration: 'none',
                color: '#111111',
                fontSize: '23px',
                fontFamily: 'SlabSerif',
              }}
            >
              Logout
            </Link>
          </button>
        </div>
      </nav>

      <div className="container-fluid text-center">
        <h1 style={{ fontFamily: 'SlabSerif', color: '#9A3B3B' }}>Pricing</h1>
        <br />
        <h4 style={{ fontFamily: 'serif',color:'#262A56' }}>
          Welcome to ProjectPlanner. Choose the plan that best fits your needs.
        </h4>

        <div className="container-fluid" style={{ padding: '38px 35px', margin: '10px 0' }}>
          <div className="row mx-auto">
            {/* Basic Plan */}
            <div className="col-sm-4 col-xs-12 mx-auto">
              <div className="panel panel-default text-center" style={{ backgroundColor: '#DADDB1', height: '400px', borderRadius: '25px' }}>
                <div className="panel-heading" style={{ backgroundColor: '#DADDB1', borderRadius: '25px' }}>
                  <h1 style={{ fontFamily: 'SlabSerif', color: '#9A3B3B' }}>Basic</h1>
                </div>
                <div className="panel-body">
                  <p style={{ fontFamily: 'serif', fontSize: '27px', color: '#262A56' }}>
                    <strong>$0</strong>/mo
                  </p>
                  <p style={{ fontFamily: 'serif', fontSize: '20px', color: '#262A56' }}>Up to 10 team members</p>
                  <p style={{ fontFamily: 'serif', fontSize: '20px', color: '#262A56' }}>5 GB of Storage</p>
                  <p style={{ fontFamily: 'serif', fontSize: '20px', color: '#262A56' }}>Limited Features</p>
                  <p style={{ fontFamily: 'serif', fontSize: '20px', color: '#262A56' }}>Email Support</p>
                  <p style={{ fontFamily: 'serif', fontSize: '20px', color: '#262A56' }}>Help center access</p>
                </div>
                <div className="panel-footer">
                 <Link to="/">
                  <button type="submit" className="Loginbtn" style={{ fontFamily: 'SlabSerif', fontSize: '25px', background: '#DADDB1', color: '#9A3B3B' }}>
                    Signup free
                  </button>
                 </Link>
                </div>
              </div>
            </div>

            <div className="col-sm-4 col-xs-12 mx-auto">
              <div className="panel panel-default text-center" style={{ backgroundColor: '#DADDB1', height: '400px', borderRadius: '25px' }}>
                <div className="panel-heading" style={{ backgroundColor: '#DADDB1', borderRadius: '25px' }}>
                  <h1 style={{ fontFamily: 'SlabSerif', color: '#9A3B3B' }}>Premium</h1>
                </div>
                <div className="panel-body" style={{ fontFamily: 'serif', fontSize: '27px', color: '#262A56' }}>
                  <p>
                    <strong>$15</strong>/mo
                  </p>
                  <p style={{ fontFamily: 'serif', fontSize: '20px', color: '#262A56' }}>Unlimited team members</p>
                  <p style={{ fontFamily: 'serif', fontSize: '20px', color: '#262A56' }}>30 GB of Storage</p>
                  <p style={{ fontFamily: 'serif', fontSize: '20px', color: '#262A56' }}>Integrations with popular third-party apps</p>
                  <p style={{ fontFamily: 'serif', fontSize: '20px', color: '#262A56' }}>Email Support</p>
                  <p style={{ fontFamily: 'serif', fontSize: '20px', color: '#262A56' }}>Help center access</p>
                </div>
                <div className="panel-footer">
                 <Link to="/">
                  <button type="submit" className="Loginbtn" style={{ fontFamily: 'SlabSerif', fontSize: '25px', background: '#DADDB1', color: '#9A3B3B' }}>
                    Get Started
                  </button>
                 </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
