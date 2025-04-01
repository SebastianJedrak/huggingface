import { useState } from 'react';
import Button from './Button';
import Input from './Input';
import useHuggingFace from '../hooks/useHuggingFace';

function SentimentForm() {
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

      <Button label="Submit" type="submit" isLoading={isLoading} />
    </form>
  );
}

export default SentimentForm;
