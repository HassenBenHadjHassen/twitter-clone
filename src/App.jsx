import React from 'react';
import './App.css';

/* Components */
import Sidebar from '../src/Components/Sidebar/Sidebar';
import Feed from '../src/Components/Feed/Feed';
import Widgets from './Components/Widgets/Widgets';

function App() {
  return (
    <div className='app'>
      {/* Sidebar */}
      <Sidebar />
      {/* Feed */}
      <Feed />
      {/* Widgets */}
      <Widgets />
    </div>
  );
}

export default App;
