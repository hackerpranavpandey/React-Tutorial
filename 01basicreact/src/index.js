import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

// here react create its own DOM and then render
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);