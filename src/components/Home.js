import React from 'react';
import './Home.css';
import FileUpload from './FileUpload';

const Home = () => {
  return (
    <main className="home">
      <h2>Welcome to the File Sharing App</h2>
      <p>Share your files securely and efficiently</p>
      <FileUpload />
    </main>
  );
};

export default Home;
