// import * as React from 'react';
// import { createRoot } from 'react-dom/client';
// import Main from './src/pages/main';

// const container = document.getElementById('root');
// const root = createRoot(container!); // علامت ! یعنی مطمئنیم root وجود دارد
// root.render(<Main />);

import * as React from 'react';
import ReactDOM from 'react-dom/client';
import Main from './src/pages/main';

// پیدا کردن المان root
const rootElement = document.getElementById('root');

// بررسی وجود المان root
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  
  root.render(
    <React.StrictMode>
      <Main />
    </React.StrictMode>
  );
} else {
  console.error('Element with id "root" not found');
}
