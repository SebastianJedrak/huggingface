import './App.css';
import SentimentForm from './components/SentimentForm';

function App() {
  return (
    <>
      <header>
        <h1>Sentiment Analysis</h1>
      </header>

      <main>
        <h2>Analyze your text</h2>
        <p>Enter text to analyze its sentiment.</p>
        <SentimentForm />
      </main>

      <footer>
        <p>&copy; 2025 Sentiment Analysis Tool</p>
      </footer>
    </>
  );
}

export default App;
