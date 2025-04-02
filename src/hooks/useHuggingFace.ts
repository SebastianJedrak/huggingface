import { useState } from 'react';
import { huggingFaceResults } from '../types/huggingFaceTypes';
import huggingFaceApi from '../api/huggingFaceApi';

type UseHuggingFaceReturn = [
  (text: string) => Promise<huggingFaceResults | null>,
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
      return data;
    } else {
      return null;
    }
  };

  return [getHuggingFace, isLoading, error];
};

export default useHuggingFace;
