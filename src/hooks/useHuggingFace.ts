import { useState } from 'react';
import { huggingFaceResults } from '../types/huggingFaceTypes';
import huggingFaceApi from '../api/huggingFaceApi';

type UseHuggingFaceReturn = [
  (text: string) => Promise<huggingFaceResults | null>,
  boolean,
  string | null,
  huggingFaceResults | null,
];

export const useHuggingFace = (): UseHuggingFaceReturn => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<huggingFaceResults | null>(null);

  const getHuggingFace = async (text: string) => {
    setIsLoading(true);
    setError(null);

    try {
      const data = await huggingFaceApi.fetchHuggingFace(text);
      setResult(data);
      return result;
    } catch (err) {
      setError(err as string);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  return [getHuggingFace, isLoading, error, result];
};

export default useHuggingFace;
