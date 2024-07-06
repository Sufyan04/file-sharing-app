import React, { useState } from 'react';
import './FileUpload.css';

const FileUpload = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleFileUpload = () => {
    if (file) {
      // For now, we just log the file info to the console
      console.log('File uploaded:', file);
      alert(`File uploaded: ${file.name}`);
      setFile(null);
    } else {
      alert('Please select a file first.');
    }
  };

  return (
    <div className="file-upload">
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleFileUpload}>Upload</button>
      {file && <p>Selected file: {file.name}</p>}
    </div>
  );
};

export default FileUpload;
