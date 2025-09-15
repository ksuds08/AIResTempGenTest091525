import React, { useState } from 'react';

const App = () => {
  const [template, setTemplate] = useState('');

  const handleGenerate = () => {
    // Logic for resume template generation
    setTemplate('<h2>Your Beautiful Resume</h2>');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">AI Resume Template Generator</h1>
      <button className="px-6 py-2 bg-blue-500 text-white rounded" onClick={handleGenerate}>Generate Resume</button>
      <div className="mt-6 bg-white p-4 rounded shadow-md" dangerouslySetInnerHTML={{ __html: template }} />
    </div>
  );
};

export default App;