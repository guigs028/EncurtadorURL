import { useState } from 'react';
import './App.css';

function App() {
  const [originalUrl, setOriginalUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setShortUrl('');
    try {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/encurtar`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ originalUrl }),
      });
      if (!response.ok) throw new Error('Erro ao encurtar a URL');
      const data = await response.json();
      setShortUrl(data.shortUrl || data.url || '');
    } catch (err: any) {
      setError(err.message || 'Erro desconhecido');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h1>Encurtador de URL</h1>
      <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginBottom: '1rem' }}>
        <input
          type="url"
          placeholder="Cole sua URL aqui"
          value={originalUrl}
          onChange={e => setOriginalUrl(e.target.value)}
          required
          style={{ flex: 1, marginBottom: 0 }}
        />
        <button type="submit" disabled={loading} style={{ height: '40px' }}>
          {loading ? 'Encurtando...' : 'Encurtar'}
        </button>
      </form>
      {shortUrl && (
        <div className="result" style={{ textAlign: 'center' }}>
          <p style={{ textAlign: 'center', marginBottom: '0.5rem' }}>URL encurtada:</p>
          <a href={shortUrl} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', textAlign: 'center', wordBreak: 'break-all' }}>{shortUrl}</a>
          <p style={{ textAlign: 'center', marginTop: '0.5rem' }}>(URL longa por conta da hospedagem do back-end no Render)</p>
        </div>
      )}
      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default App;
