import { HashRouter as Router} from 'react-router-dom';
import './App.css';
import React from 'react';
import CustomRoutes from './routes';

function App() {
  return (
    <Router>
      <div className="flex flex-col bg-gray-100">
        <CustomRoutes />
      </div>
    </Router>
  );
}

export default App;
