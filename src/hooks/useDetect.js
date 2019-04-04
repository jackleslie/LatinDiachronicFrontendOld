import { useState } from 'react';
import axios from 'axios';

export default function useDetect(text) {
  const [results, setResults] = useState(null);

  function getResults(text, select) {
    text = text.join();
    axios
      .get(
        `${process.env.REACT_APP_LATIN_DIACHRONIC_API_URL}/intersection/${text}`
      )
      .then(results => {
        setResults(results.data);
      })
      .catch(() => {
        setResults(null);
      });
  }

  function clearResults() {
    setResults(null);
  }

  return [results, getResults, clearResults];
}
