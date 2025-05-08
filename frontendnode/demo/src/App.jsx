// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

import React, { useState } from 'react';
import CollegeForm from './components/CollegeForm';
import SHSForm from './components/SHSForm';
import './App.css';

const App = () => {
  const [selectedType, setSelectedType] = useState('');

  return (
    <div className="app-wrapper">
      <div className="registration-container">
        <h2>Exhibition Event Registration</h2>
        <select
          className="category-select"
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
        >
          <option value=''>Select Category</option>
          <option value='College'>College Student</option>
          <option value='Shs'>Senior High School</option>
        </select>

        {selectedType === 'College' && <CollegeForm />}
        {selectedType === 'Shs' && <SHSForm />}
      </div>
    </div>
  );
};

export default App;
;