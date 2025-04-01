import './App.css';
import Button from './components/Button';
import Input from './components/Input';

function App() {
  return (
    <>
      <header>
        <h1>Sentiment Analysis</h1>
      </header>
      <main>
        <h2>Analyze your text</h2>
        <p>Enter text to analyze its sentiment.</p>
        <form>
          <Input />
          <Button />
        </form>
      </main>
      <footer>
        <p>&copy; 2025 Sentiment Analysis Tool</p>
      </footer>
    </>
  );
}

export default App;
