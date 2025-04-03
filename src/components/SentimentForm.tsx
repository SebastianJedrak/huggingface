import { useState } from 'react';
import Button from './Button';
import Input from './Input';
import useHuggingFace from '../hooks/useHuggingFace';
import { huggingFaceResults } from '../types/huggingFaceTypes';
import Modal from './Modal';

const SentimentForm: React.FC = () => {
  const [result, setResult] = useState<huggingFaceResults | null>(null);
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
    <>
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
        {isLoading && <span>Loading...</span>}

        <Button label="Analyze" type="submit" isLoading={isLoading} />
      </form>

      <Modal
        title="Sentiment Analysis"
        isOpen={sentimentModalOpen}
        onClose={handleSentimentModalClose}
      >
        {result &&
          result.map((item, index) => (
            <div key={index}>
              <p>{item.label}</p>
              <p>{item.score}</p>
            </div>
          ))}
      </Modal>
    </>
  );
};

export default SentimentForm;
