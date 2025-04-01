import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import Input from './components/Input';
import useHuggingFace from './hooks/useHuggingFace';

function App() {
  const [getHuggingFace, isLoading, error, result] = useHuggingFace();
  const [sentimentInput, setSentimentInput] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await getHuggingFace(sentimentInput);
    } catch (err) {
      console.error(err);
    }
  };

  const handleInputChange = (value: string) => {
    setSentimentInput(value);
  };

  return (
    <>
      <header>
        <h1>Sentiment Analysis</h1>
      </header>

      <main>
        <h2>Analyze your text</h2>
        <p>Enter text to analyze its sentiment.</p>
        <form onSubmit={handleSubmit}>
          <Input
            label="Sentiment"
            value={sentimentInput}
            onChange={handleInputChange}
            type="textarea"
            maxLength={500}
            autoFocus
          />

          {error && <span>{error}</span>}
          {isLoading && <span>Loading...</span>}
          {result &&
            result.map((item, index) => (
              <div key={index}>
                <p>{item.label}</p>
                <p>{item.score}</p>
              </div>
            ))}

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
