import React from 'react';

import AnimatedCursor from 'react-animated-cursor';

import Navigation from './components/Navigation';
import Contents from './components/Contents';

const App: React.FC = () => (
  <div className="l-app">
    <header>
      <Navigation/>
    </header>
    <body>
      <Contents/>
    </body>
    {/* <footer>Footer</footer> */}
    <AnimatedCursor innerSize={20} outerSize={40}/>
  </div>
);

export default App;
