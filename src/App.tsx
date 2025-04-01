import './App.css';
import Button from './components/Button';
import Input from './components/Input';
import useHuggingFace from './hooks/useHuggingFace';

function App() {
  const [getHuggingFace, isLoading, error, result] = useHuggingFace();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    // const text = (event.target as HTMLFormElement).text.value;
    try {
      await getHuggingFace('text');
      console.log(isLoading, error, result);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <header>
        <h1>Sentiment Analysis</h1>
      </header>
      <main>
        <h2>Analyze your text</h2>
        <p>Enter text to analyze its sentiment.</p>
        <form onSubmit={handleSubmit}>
          <Input label="Sentiment" type="textarea" maxLength={500} autoFocus />

          {error && <span>{error}</span>}
          {isLoading && <span>Loading...</span>}

          <Button />
        </form>
      </main>
      <footer>
        <p>&copy; 2025 Sentiment Analysis Tool</p>
      </footer>
    </>
  );
}

export default App;
