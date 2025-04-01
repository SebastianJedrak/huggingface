const HUGGING_FACE_URL =
  'https://api-inference.huggingface.co/models/distilbert-base-uncased-finetuned-sst-2-english';

export const fetchHuggingFace = async (text: string = 'test'): Promise<string[] | undefined> => {
  try {
    const token = import.meta.env.VITE_HUGGING_FACE_TOKEN;
    if (!token) {
      throw new Error('Hugging Face API token is not defined');
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
    return data;
  } catch (error) {
    console.error('Fetching data error:', error);
    throw error;
  }
};

export default {
  fetchHuggingFace,
};
