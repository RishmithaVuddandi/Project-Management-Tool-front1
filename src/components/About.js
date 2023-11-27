import React from 'react';
import { Link } from 'react-router-dom';
import image from '../3.png';
import 'bootstrap/dist/css/bootstrap.min.css';
// C:\Users\SRICHANDANA\Desktop\mern_project\frontend\src\logo.jpg

function About({ children }) {
  return (
      <div style={{ background: '#fef5eb', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
  <nav style={{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: '#fef5eb',
    height: '65px',
    padding: '0 20px',
  }}>
    <div>
      <img src={image} alt='Logo' style={{
        height: '57px',
        width: '320px',
        marginRight: '20px',
      }} />
    </div>
    <div>
      <button style={{
        backgroundColor: '#fef5eb',
        borderRadius: '4px',
        padding: '8px 20px',
        marginRight: '20px',
        transition: 'opacity 0.2s',
      }}
        onMouseEnter={(e) => e.target.style.opacity = 0.6}
        onMouseLeave={(e) => e.target.style.opacity = 1}>
        <Link to="/" style={{
          textDecoration: 'none',
          color: '#111111',
          fontFamily: 'SlabSerif',
          fontSize: '23px',
        }}>
          Home
        </Link>
      </button>
      <button style={{
        backgroundColor: '#fef5eb',
        borderRadius: '4px',
        padding: '8px 20px',
        transition: 'opacity 0.2s',
      }}
        onMouseEnter={(e) => e.target.style.opacity = 0.6}
        onMouseLeave={(e) => e.target.style.opacity = 1}>
        <Link to="/login" style={{
          textDecoration: 'none',
          color: '#111111',
          fontFamily: 'SlabSerif',
          fontSize: '23px',
        }}>
          Logout
        </Link>
      </button>
    </div>
  </nav>

  <div className="container" style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div className="row gy-3">
          <div className="col-lg-4">
            <div style={{ backgroundColor: "#DADDB1", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", height: "370px", width: "350px", padding: "5px", borderRadius: "5px" }}>
              <h2 className="mb-3" style={{ color: '#9A3B3B', fontFamily: 'SlabSerif', textAlign: 'center', fontSize: '30px' }}>Who Are We?</h2>
              <p className="mb-5" style={{ color: '#262A56', fontSize: '17px', fontFamily: 'serif' }}>
                We are a fast-growing company, but we have never lost sight of our core values. We believe in collaboration, innovation, and customer satisfaction. Our team of experienced project managers and technology experts is dedicated to making project management more accessible, intuitive, and effective. We have a passion for helping our clients achieve their project goals, and we take pride in the positive impact we've had on countless businesses and projects.
              </p>
            </div>
          </div>

          <div className="col-lg-4">
            <div style={{ backgroundColor: "#DADDB1", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", height: "370px", width: "350px", padding: "5px", borderRadius: "5px" }}>
              <h2 className="h4 mb-3" style={{ color: '#9A3B3B', fontFamily: 'SlabSerif', textAlign: 'center', fontSize: '30px' }}>Our Mission</h2>
              <p className="mb-0" style={{ color: '#262A56', fontSize: '17px', fontFamily: 'serif' }}>
                Our mission is simple yet profound: to empower teams and individuals to achieve their project goals efficiently and collaboratively. We believe that effective project management is the cornerstone of success, and we're committed to providing the tools you need to make that a reality.
              </p>
            </div>
          </div>

          <div className="col-lg-4">
            <div style={{ backgroundColor: "#DADDB1", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", height: "370px", width: "350px", padding: "5px", borderRadius: "5px" }}>
              <h2 className="h4 mb-3" style={{ color: '#9A3B3B', fontFamily: 'SlabSerif', textAlign: 'center', fontSize: '30px' }}>Our Values</h2>
              <p className="mb-0" style={{ color: '#262A56', fontSize: '17px', fontFamily: 'serif' }}>
                Customer-Centric: We prioritize understanding your needs and delivering solutions that exceed your expectations.
              </p>
              <p className="mb-0" style={{ color: '#262A56', fontSize: '17px', fontFamily: 'serif' }}>
                Innovation: Your feedback drives our development, and we're always evolving to meet the ever-changing landscape of project management.
              </p>
              <p className="mb-0" style={{ color: '#262A56', fontSize: '17px', fontFamily: 'serif' }}>
                Transparency: We believe in open communication. We're transparent about how our tool works, and we take data security seriously.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
