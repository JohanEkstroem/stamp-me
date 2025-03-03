import { useState } from 'react'
import React from 'react';
import './App.css'

function StampMeApp() {
  const [count, setCount] = useState(0)

  return (
    <div className="landing-page">
      <header className="landing-header">
        <h1>Stamp-Me</h1>
        <p>Make your time count.</p>
        <button style={{width: '150px', height: '50px', marginRight: '10px'}} className="cta-button">Register</button>
        <button style={{width: '150px', height: '50px'}} className="cta-button" >Login</button>
      </header>

      <section className="features">
        <div className="feature">
          <h3 >Need help?</h3>
          <p>Then get some</p>
        </div>
      </section>
      <footer className="landing-footer">
        <p>&copy; {new Date().getFullYear()} My Company. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default StampMeApp;
