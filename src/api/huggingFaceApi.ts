const HUGGING_FACE_URL =
  'https://api-inference.huggingface.co/models/distilbert-base-uncased-finetuned-sst-2-english';

const getHuggingFaceToken = (): string => {
  const token = import.meta.env.HUGGING_FACE_TOKEN;
  if (!token) {
    console.warn('API token is not defined in environment variables');
  }
  return token as string;
};

export const fetchHuggingFace = async (text: string = 'test'): Promise<string[] | undefined> => {
  try {
    const response = await fetch(HUGGING_FACE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${getHuggingFaceToken()}`,
      },
      body: JSON.stringify({ inputs: text }),
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error analyzing sentiment:', error);
  }
};

export default {
  fetchHuggingFace,
};
