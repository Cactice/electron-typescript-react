/**
 * React renderer.
 */
import '@public/style.css';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import React, { useState } from 'react';

// Import the styles here to process them with webpack


ReactDOM.render(
  <Example />,
  document.getElementById('app'),
);

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = React.useState(0);

  return (
    <div className="app">
      <p>
        You clicked
        {' '}
        {count}
        {' '}
        times
      </p>
      <button type="button" onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
