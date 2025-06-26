import { useEffect, useState } from 'react';

function useCurrencyInfo(baseCurrency) {
  const [rates, setRates] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!baseCurrency) return;

    const fetchRates = async () => {
      const date = 'latest';
      const version = 'v1';
      const endpoint = `currencies/${baseCurrency.toLowerCase()}`;

      const url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@${date}/${version}/${endpoint}.json`;

      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error(`HTTP ${res.status}`);
        }
        const json = await res.json();

        // After migration, the data structure is: { [base]: { ...rates } }
        const data = json[baseCurrency.toLowerCase()];
        setRates(data);
      } catch (err) {
        console.error('Failed to fetch currency data:', err);
        setError(err);
        setRates({});
      }
    };

    fetchRates();
  }, [baseCurrency]);

  return { rates, error };
}

export default useCurrencyInfo;
