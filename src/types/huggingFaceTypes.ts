export type huggingFaceResultLabel = 'POSITIVE' | 'NEGATIVE' | 'NEUTRAL';

export interface huggingFaceResult {
  label: huggingFaceResultLabel;
  score: number;
}

export interface huggingFaceResponse {
  data: huggingFaceResult[];
  error?: string;
}
