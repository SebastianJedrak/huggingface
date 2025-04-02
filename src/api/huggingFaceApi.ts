import { huggingFaceResults } from '../types/huggingFaceTypes';

const HUGGING_FACE_URL =
  'https://api-inference.huggingface.co/models/distilbert-base-uncased-finetuned-sst-2-english';

export const fetchHuggingFace = async (
  text: string,
  onError: (error: string) => void
): Promise<huggingFaceResults | null> => {
  try {
    const token = import.meta.env.VITE_HUGGING_FACE_TOKEN;
    if (!token) {
      throw new Error('Hugging Face API token is not defined');
    }
    if (!text.trim()) {
      throw new Error('Please provide a text to analyze');
    }
    if (text.trim().length > 500) {
      throw new Error('Text is to long');
    }

    const response = await fetch(HUGGING_FACE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ inputs: text }),
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data[0];
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error('Fetching data error:', errorMessage);
    onError(errorMessage);
    return null;
  }
};

export default {
  fetchHuggingFace,
};
