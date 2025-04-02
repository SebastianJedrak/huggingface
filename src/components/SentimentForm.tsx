import { useState } from 'react';
import Button from './Button';
import Input from './Input';
import useHuggingFace from '../hooks/useHuggingFace';
import { huggingFaceResults } from '../types/huggingFaceTypes';

interface SentimentFormProps {
  onSubmit: (data: huggingFaceResults | null) => void;
}

const SentimentForm: React.FC<SentimentFormProps> = ({ onSubmit }) => {
  const [getHuggingFace, isLoading, error] = useHuggingFace();
  const [sentimentInput, setSentimentInput] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const result = await getHuggingFace(sentimentInput);
    onSubmit(result);
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
