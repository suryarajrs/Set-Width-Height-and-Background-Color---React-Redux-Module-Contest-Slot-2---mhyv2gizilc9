import React, { useState } from 'react'
import '../styles/App.css';
const App = () => {
  const [selectedShape, setSelectedShape] = useState('square');
  const [shapes, setShapes] = useState([]);

  const handleSelectChange = (e) => {
    setSelectedShape(e.target.value);
  };

  const handleAddShape = () => {
    if (selectedShape === 'square') {
      setShapes([...shapes, <div className="square"></div>]);
    } else if (selectedShape === 'circle') {
      setShapes([...shapes, <div className="circle"></div>]);
    }
  };
  return (
    <div id="main">
      <div id="shape-creator">
        <select value={selectedShape} onChange={handleSelectChange}>
          <option value="square">Square</option>
          <option value="circle">Circle</option>
        </select>
        <button onClick={handleAddShape}>Add shape</button>
      </div>
      <div id="shapes-holder">
        {shapes}
      </div>
    </div>
  )
}


export default App;
