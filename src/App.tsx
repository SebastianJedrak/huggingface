import { useState } from 'react';
import './App.css';
import Modal from './components/Modal';
import SentimentForm from './components/SentimentForm';
import { huggingFaceResults } from './types/huggingFaceTypes';

function App() {
  const [sentimentFormResult, setSentimentFormResult] = useState<huggingFaceResults | null>(null);
  const [sentimentModalOpen, setSentimentModalOpen] = useState(false);

  const handleSentimentFormSubmit = (data: huggingFaceResults | null) => {
    if (data) {
      setSentimentFormResult(data);
      setSentimentModalOpen(true);
    }
  };

  const handleSentimentModalClose = () => {
    setSentimentFormResult(null);
    setSentimentModalOpen(false);
  };

  return (
    <>
      <header>
        <h1>Sentiment Analysis</h1>
      </header>

      <main>
        <h2>Analyze your text</h2>
        <p>Enter text to analyze its sentiment.</p>
        <SentimentForm onSubmit={handleSentimentFormSubmit} />
      </main>

      <footer>
        <p>&copy; 2025 Sentiment Analysis Tool</p>
      </footer>

      <Modal
        title="Sentiment Analysis"
        isOpen={sentimentModalOpen}
        onClose={handleSentimentModalClose}
      >
        {sentimentFormResult &&
          sentimentFormResult.map((item, index) => (
            <div key={index}>
              <p>{item.label}</p>
              <p>{item.score}</p>
            </div>
          ))}
      </Modal>
    </>
  );
}

export default App;
