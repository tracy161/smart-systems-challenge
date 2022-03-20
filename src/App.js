import React, { useState, useEffect } from 'react';
import Panel from './components/Panel';
import TotalSize from './components/TotalSize';
import TotalFiles from './components/TotalFiles';
import './App.css';

function App() {
  const [state, setData] = useState([]);

  useEffect(() => {
    const url = process.env.REACT_APP_URL;

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.log('error', error);
      }
    };

    fetchData();
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
      <div className='col-sm-12'>
        <div className='panel panel-dark-outline tabs-panel'>
          <div className='panel-body tab-content'>
            <h1>
              Total Files: <TotalFiles data={state} />
            </h1>
            <h1>
              Total Size: <TotalSize data={state} />
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
