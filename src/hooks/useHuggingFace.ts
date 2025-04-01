import { useState } from 'react';
import { huggingFaceResult } from '../types/huggingFaceTypes';
import huggingFaceApi from '../api/huggingFaceApi';

export const useHuggingFace = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<huggingFaceResult[] | null>(null);

  const getHuggingFace = async (text: string) => {
    setIsLoading(true);
    setError(null);

    try {
      const result = await huggingFaceApi.fetchHuggingFace(text);
      setResult(result.data);
      return result.data;
    } catch (err) {
      setError(err as string);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    getHuggingFace,
    isLoading,
    error,
    result,
  };
};

export default useHuggingFace;
