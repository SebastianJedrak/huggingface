import { useState } from 'react';
import Button from './Button';
import Input from './Input';
import useHuggingFace from '../hooks/useHuggingFace';
import { huggingFaceResultLabel } from '../types/huggingFaceTypes';
import Modal from './Modal';
import SentimentResult from './SentimentResult';
import LoadingIndicator from './LoadingIndicator';
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
    <div id="sentiment-form">
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

        {error && <span>{error}</span>}
        {isLoading && <LoadingIndicator />}

        <Button label="Analyze" type="submit" isLoading={isLoading} />
      </form>

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
