import React from 'react';

import AnimatedCursor from 'react-animated-cursor';

import Navigation from './components/Navigation';

const App: React.FC = () => (
  <div>
    <head>
      <Navigation/>
    </head>
    <body>
      <div>Ryuta Yamamoto</div>
      <div>Web Developer</div>
      <a href="/">Github</a>
      <a href="/">Linked-in</a>
    </body>
    <footer>Footer</footer>
    <AnimatedCursor innerSize={20} outerSize={40}/>
  </div>
);

export default App;
