import { useState } from 'react';
import { huggingFaceResultLabel } from '../types/huggingFaceTypes';
import huggingFaceApi from '../api/huggingFaceApi';

const NEUTRAL_THRESHOLD = 0.35; //absolute value of positive - negative score

type UseHuggingFaceReturn = [
  (text: string) => Promise<huggingFaceResultLabel | null>,
  boolean,
  string | null,
];

export const useHuggingFace = (): UseHuggingFaceReturn => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onError = (error: string) => {
    setError(error);
  };

  const getHuggingFace = async (text: string) => {
    setIsLoading(true);
    setError(null);

    const data = await huggingFaceApi.fetchHuggingFace(text, onError);
    setIsLoading(false);

    if (data) {
      let sentiment: huggingFaceResultLabel;
      const positiveScore = data.find((el) => el.label === 'POSITIVE')!.score;
      const negativeScore = data.find((el) => el.label === 'NEGATIVE')!.score;

      if (Math.abs(positiveScore - negativeScore) < NEUTRAL_THRESHOLD) {
        sentiment = 'NEUTRAL';
      } else if (positiveScore > negativeScore) {
        sentiment = 'POSITIVE';
      } else {
        sentiment = 'NEGATIVE';
      }

      return sentiment;
    } else {
      return null;
    }
  };

  return [getHuggingFace, isLoading, error];
};

export default useHuggingFace;
