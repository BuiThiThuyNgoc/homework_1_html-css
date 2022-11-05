import * as React from 'react';
import * as ReactDom from 'react-dom';

const root = 
ReactDom.createRoot (document.getElementById('root'));

root.render(
  <section>
    <header>
    <h1>A Header</h1>
    </header>
    <nav>
      <a href="item">Nav Item</a>
    </nav>
    <main>
      <p>The main content...</p>
    </main>
    <footer>
        <small>&copy; 2021</small>
      </footer>
  </section>
);