import { useState } from 'react';
import Button from './Button';
import Input from './Input';
import useHuggingFace from '../hooks/useHuggingFace';
import { huggingFaceResults } from '../types/huggingFaceTypes';

interface SentimentFormProps {
  onSubmit: (data: huggingFaceResults) => void;
}

const SentimentForm: React.FC<SentimentFormProps> = ({ onSubmit }) => {
  const [getHuggingFace, isLoading, error, result] = useHuggingFace();
  const [sentimentInput, setSentimentInput] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await getHuggingFace(sentimentInput);
      onSubmit(result!);
    } catch (err) {
      console.error(err);
    }
  };

  const handleInputChange = (value: string) => {
    setSentimentInput(value);
  };

  return (
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

      <Button label="Submit" type="submit" isLoading={isLoading} />
    </form>
  );
};

export default SentimentForm;
