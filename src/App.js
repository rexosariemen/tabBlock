import React from 'react';
import { render } from 'react-dom';

const App = () => {
  return (
    <React.StrictMode>
      <div>
        <h1>Hello World!</h1>
      </div>
    </React.StrictMode>
  )
}

render(<App />, document.getElementById('root'));