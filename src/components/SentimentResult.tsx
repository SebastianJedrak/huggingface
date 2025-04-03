import React from 'react';
import { huggingFaceResultLabel } from '../types/huggingFaceTypes';

const getSentimentDescription = (sentiment: huggingFaceResultLabel) => {
  switch (sentiment) {
    case 'POSITIVE':
      return 'The text expresses a positive sentiment, indicating approval, optimism, or satisfaction.';
    case 'NEGATIVE':
      return 'The text expresses a negative sentiment, indicating disapproval, pessimism, or dissatisfaction.';
    default:
      return 'The text expresses a neutral sentiment, without clear positive or negative indications.';
  }
};

const getSentimentSuggestion = (sentiment: huggingFaceResultLabel) => {
  switch (sentiment) {
    case 'POSITIVE':
      return 'Great content! Keep this positive tone for uplifting messages.';
    case 'NEGATIVE':
      return 'Consider rephrasing with more positive language if your intent is to be encouraging.';
    default:
      return 'If you want to express a stronger opinion, try adding more emotional language.';
  }
};

const getSentimentIcon = (sentiment: huggingFaceResultLabel) => {
  switch (sentiment) {
    case 'POSITIVE':
      return (
        <svg viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
        </svg>
      );
    case 'NEGATIVE':
      return (
        <svg viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 3c-2.33 0-4.31 1.46-5.11 3.5h10.22c-.8-2.04-2.78-3.5-5.11-3.5z" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24">
          <path d="M9 14h6v1.5H9zM15.5 9.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5zM8.5 9.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5zM11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
        </svg>
      );
  }
};

const getSentimentColor = (sentiment: huggingFaceResultLabel) => {
  switch (sentiment) {
    case 'POSITIVE':
      return '#27ae60';
    case 'NEGATIVE':
      return '#e74c3c';
    default:
      return '#f39c12';
  }
};

interface SentimentResultProps {
  sentiment: huggingFaceResultLabel;
}

const SentimentResult: React.FC<SentimentResultProps> = ({ sentiment }) => {
  return (
    <div>
      {sentiment}
      {getSentimentDescription(sentiment)}
      {getSentimentSuggestion(sentiment)}
      {getSentimentIcon(sentiment)}
      {getSentimentColor(sentiment)}
    </div>
  );
};

export default SentimentResult;
