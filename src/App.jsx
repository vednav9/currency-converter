import { useState } from 'react';
import useCurrencyInfo from './hooks/useCurrencyInfo';
import { InputBox } from './components/Index';
import { FiRefreshCw } from 'react-icons/fi';

function App() {
  const [amount, setAmount] = useState('');
  const [convertedAmount, setConvertedAmount] = useState('');
  const [from, setFrom] = useState('USD');
  const [to, setTo] = useState('INR');
  const [isLoading, setIsLoading] = useState(false);
  const { rates: currencyInfo, error } = useCurrencyInfo(from);

  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };

  const convert = (e) => {
    e.preventDefault();
    if (!amount || !currencyInfo[to]) return;

    setIsLoading(true);
    const result = (parseFloat(amount) * currencyInfo[to]).toFixed(2);

    setTimeout(() => {
      setConvertedAmount(result);
      setIsLoading(false);
    }, 300);
  };

  return (
    <div className="min-h-screen bg-cover bg-center flex items-center justify-center p-4"
      style={{ backgroundImage: "url('./public/background.png')" }}>
      <div className="max-w-md w-full bg-white/30 backdrop-blur-md rounded-xl p-6 shadow-lg">
        <h1 className="text-2xl font-bold text-center text-white mb-6">✨ Currency Converter</h1>

        {error && (
          <div className="text-red-100 bg-red-600/50 p-3 rounded mb-4">
            Error fetching rates. Try again later.
          </div>
        )}

        <form onSubmit={convert} className="space-y-4">
          <InputBox
            label="From"
            amount={amount}
            currencyOptions={options}
            onCurrencyChange={setFrom}
            onAmountChange={setAmount}
            selectedCurrency={from}
          />

          <button
            type="button"
            onClick={swap}
            className="w-full flex items-center justify-center py-2 bg-blue-500 hover:bg-blue-600 transition rounded text-white font-medium"
          >
            <FiRefreshCw className="mr-2 animate-spin" />
            Swap
          </button>

          <InputBox
            label="To"
            amount={convertedAmount}
            currencyOptions={options}
            onCurrencyChange={setTo}
            selectedCurrency={to}
            amountDisabled
          />

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full py-3 rounded font-semibold text-white transition ${
              isLoading ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-500 hover:bg-green-600'
            }`}
          >
            {isLoading ? 'Converting...' : `Convert ${from} → ${to}`}
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
