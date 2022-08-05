import './App.css';
import Counter from './Components/Counter/Counter';
import ErrorBoundary from './Components/ErrorBoundary/ErrorBoundary';

function App() {
  return (
    <div className="App">
        <ErrorBoundary>
            <Counter />
        </ErrorBoundary>
    </div>
  );
}

export default App;
