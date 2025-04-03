import { describe, it, expect, vi, beforeEach, afterAll } from 'vitest';
import { fetchHuggingFace } from './huggingFaceApi';

const originalFetch = window.fetch;
window.fetch = vi.fn();

describe('fetchHuggingFace', () => {
  beforeEach(() => {
    // @ts-expect-error Mock function has different type
    window.fetch.mockClear();
  });

  afterAll(() => {
    window.fetch = originalFetch;
  });

  it('should handle empty text input', async () => {
    const onErrorMock = vi.fn();
    const result = await fetchHuggingFace('', onErrorMock);

    expect(result).toBeNull();

    expect(onErrorMock).toHaveBeenCalledWith('Please provide a text to analyze');
  });

  it('should handle text that is too long', async () => {
    const longText = 'a'.repeat(501);

    const onErrorMock = vi.fn();
    const result = await fetchHuggingFace(longText, onErrorMock);

    expect(result).toBeNull();

    expect(onErrorMock).toHaveBeenCalledWith('Text is to long');
  });

  it('should handle API error response', async () => {
    const mockResponse = {
      ok: false,
      status: 400,
      statusText: 'Bad Request',
    };
    // @ts-expect-error Mock function has different type
    window.fetch.mockResolvedValue(mockResponse);

    const onErrorMock = vi.fn();
    const result = await fetchHuggingFace('This is a test text', onErrorMock);

    expect(window.fetch).toHaveBeenCalled();

    expect(result).toBeNull();

    expect(onErrorMock).toHaveBeenCalledWith('API error: 400 Bad Request');
  });
});
