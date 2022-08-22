import React from 'react';
import './styles.css';

const Header = () => (
  <>
  <header className='home-header'>
    <h2>Inc. Today's</h2>
    <h1>
      <span>“</span> 2 Min Blog <span>”</span>
    </h1>
    <p>
      awesome place to make Yourself <br /> productive through
      just reading 2 min blogs
    </p>
    
  </header>
  <div className='header-below'>
  <p className='chip'>Tech Related</p>
  <p className='chip'>Just Random Thoughts</p>
  </div>
  </>
);

export default Header;
