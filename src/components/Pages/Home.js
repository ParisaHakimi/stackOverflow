import React from "react";

const Home = () => {
  return (
    <div className="home">
      <div className="box-container">
        <div className="left-box box">
          <div className="icon">
            <i class="fa fa-search" aria-hidden="true"></i>
          </div>
          <p>
            Find the best answer to your technical question, help others answer
            theirs
          </p>
          <a href="/posts">Join the commiunity</a>
        </div>
        <div className="right-box box">
          <div className="icon">
            <i class="fa fa-lock" aria-hidden="true"></i>
          </div>
          <p>Want a secure, private space for your technical knowledge?</p>
          <div className="line">
            <span>Get Started</span>
          </div>
          <div className="links">
            <a href="/" className="organizations">
              For large organizations
            </a>
            <a href="/" className="team">
              For small team
            </a>
          </div>
        </div>
      </div>
      <div className="dynamic-text">
        <span className="dynamic">Every&nbsp;</span>
        <span>&nbsp;has a tab to Stack Overflow</span>
      </div>
    </div>
  );
};

export default Home;
