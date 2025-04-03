import { useState } from 'react';
import Button from './UI/Button';
import Input from './UI/Input';
import useHuggingFace from '../hooks/useHuggingFace';
import { huggingFaceResultLabel } from '../types/huggingFaceTypes';
import Modal from './UI/Modal';
import SentimentResult from './SentimentResult';
import LoadingIndicator from './UI/LoadingIndicator';
import './SentimentForm.scss';

const SentimentForm: React.FC = () => {
  const [result, setResult] = useState<huggingFaceResultLabel | null>(null);
  const [sentimentModalOpen, setSentimentModalOpen] = useState(false);
  const [getHuggingFace, isLoading, error] = useHuggingFace();
  const [sentimentInput, setSentimentInput] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const data = await getHuggingFace(sentimentInput);
    setResult(data);

    if (data) {
      setSentimentModalOpen(true);
    } else {
      setSentimentModalOpen(false);
    }
  };

  const handleSentimentModalClose = () => {
    setResult(null);
    setSentimentModalOpen(false);
  };

  const handleInputChange = (value: string) => {
    setSentimentInput(value);
  };

  return (
    <div className="sentiment-form">
      <form onSubmit={handleSubmit}>
        <Input
          label="Sentiment"
          value={sentimentInput}
          onChange={handleInputChange}
          type="textarea"
          maxLength={500}
          autoFocus
          required
        />

        <Button label="Analyze" type="submit" isLoading={isLoading} />
      </form>

      {error && <p className="error">{error}</p>}
      {isLoading && <LoadingIndicator />}
      <Modal
        title="Sentiment Analysis"
        isOpen={sentimentModalOpen}
        onClose={handleSentimentModalClose}
      >
        {result && <SentimentResult sentiment={result} />}
      </Modal>
    </div>
  );
};

export default SentimentForm;
