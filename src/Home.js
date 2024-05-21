import React from 'react';

const Home = ({ setShowLogin, setShowRegister }) => {
  return (
    <div className="card p-4 text-center">
      <h2>Welcome</h2>
      <div className="d-flex justify-content-around">
        <button onClick={() => setShowRegister(true)} className="btn btn-primary">
          Register
        </button>
        <button onClick={() => setShowLogin(true)} className="btn btn-secondary">
          Login
        </button>
      </div>
    </div>
  );
};

export default Home;
