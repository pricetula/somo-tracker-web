import React from 'react';

function Home() {
  return (
    <section className="demo">
      <nav className="nav">
        <span className="nav__logo">StudentTracker</span>
        <section className="nav__link-wrapper">
          <ul>
            <li>How it works</li>
            <li>Pricing</li>
          </ul>

          <ul className="profile-links">
            <li>signin</li>
            <li>signup</li>
          </ul>
        </section>
      </nav>
      <div className="banner">
        <div className="description-wrapper">
          <h1>Short Title</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, obcaecati.</p>
        </div>
        <div className="image-wrapper">
          <div className="image">image</div>
        </div>
      </div>
      <div className="primary">
        Primary
      </div>
      <div className="secondary">
        Secondary
      </div>
      <div className="error">
        Error
      </div>
      <div className="warning">
        Warning
      </div>
    </section>
  );
}

export default Home;
