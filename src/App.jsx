import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>test-app</h1>
        <p>A test React application to verify the project creation tool</p>
        <button 
          className="btn-primary"
          onClick={() => alert('Welcome to test-app!')}
        >
          Get Started
        </button>
      </header>
      
      <main className="App-main">
        <section className="hero">
          <h2>Welcome to test-app</h2>
          <p>This React app was created with modern tooling and best practices.</p>
          <div className="features">
            <div className="feature">
              <h3>🚀 Modern Setup</h3>
              <p>Latest React with hooks and functional components</p>
            </div>
            <div className="feature">
              <h3>🧪 Testing Ready</h3>
              <p>Jest and React Testing Library configured</p>
            </div>
            <div className="feature">
              <h3>🔧 Developer Tools</h3>
              <p>ESLint, Prettier, and hot reloading</p>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="App-footer">
        <p>&copy; 2024 test-app. Created with Cursor AI Project Creator.</p>
      </footer>
    </div>
  );
}

export default App;