// src/components/MainPage.js
import React from 'react';
import { Link } from 'react-router-dom';

function MainPage() {
  return (
    <div>
      <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
        <div>DEV@Deakin</div>
        <input type="text" placeholder="Search..." style={{ marginRight: '20px' }} />
        <div>
          <button style={{ marginRight: '10px' }}>Post</button>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default MainPage;
