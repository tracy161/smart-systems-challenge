import React, { useState, useEffect } from 'react';
import Panel from './components/Panel';
import './App.css';

function App() {
  const [state, setState] = useState([]);

  useEffect(() => {
    fetch(`https://dev21.becollective.com/api/v2/coding-challenges/dirs`)
      .then((res) => res.json())
      .then((data) => setState(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className='container'>
      <div className='col-sm-12'>
        <div className='panel panel-dark-outline tabs-panel'>
          <div className='panel-body tab-content'>
            {state.map((item, index) => (
              <Panel key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
