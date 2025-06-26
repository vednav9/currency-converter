import React, { useId } from 'react'

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectedCurrency = "usd",
  amountDisabled = false,
  currencyDisabled = false,
  className = "",
}) {
  const id = useId()

  return (
    <div className={`bg-white/50 rounded-lg p-4 mb-2 text-sm flex justify-between gap-4 items-end ${className}`}>
      <div className='w-1/2'>
        <label htmlFor={id} className='block text-gray-700 mb-1 font-medium'>{label}</label>
        <input
          id={id}
          type="number"
          className='w-full px-3 py-2 rounded-md border border-gray-300 bg-white/90 outline-none focus:ring-2 focus:ring-blue-500'
          placeholder='Amount'
          disabled={amountDisabled}
          value={amount}
          onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
        />
      </div>
      <div className='w-1/2 text-right'>
        <label className="block text-gray-700 mb-1 font-medium">Currency</label>
        <select
          className='w-full px-3 py-2 rounded-md border border-gray-300 bg-white/90 cursor-pointer outline-none focus:ring-2 focus:ring-blue-500'
          value={selectedCurrency}
  onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
  disabled={currencyDisabled}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>{currency.toUpperCase()}</option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default InputBox