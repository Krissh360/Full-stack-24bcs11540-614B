import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

const API_KEY = import.meta.env.VITE_EXCHANGE_API_KEY || '6f052cc1d82a6df08961b167'

function App() {
  const [amount, setAmount] = useState(0)
  const [fromCurrency, setFromCurrency] = useState('USD')
  const [toCurrency, setToCurrency] = useState('INR')
  const [convertedAmount, setConvertedAmount] = useState(0)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  async function handleConvert() {
    setError(null)
    if (!amount || Number.isNaN(amount)) {
      setError('Enter a valid amount')
      return
    }
    if (fromCurrency === toCurrency) {
      setConvertedAmount(amount)
      return
    }

    setLoading(true)
    try {
      const res = await fetch(`https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${fromCurrency}`)
      if (!res.ok) throw new Error(`API error: ${res.status}`)
      const data = await res.json()
      const rate = data && data.conversion_rates && data.conversion_rates[toCurrency]
      if (!rate) throw new Error('Rate not found for selected currency')
      setConvertedAmount((amount * rate).toFixed(4))
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>

      <input
        type="number"
        placeholder="Enter amount"
        value={amount}
        onChange={(e) => setAmount(parseFloat(e.target.value))}
        style={{ margin: '10px', marginRight: '350px', marginLeft: '350px' }}
      />

      <button
        style={{ margin: '10px', marginRight: '350px', marginLeft: '350px', backgroundColor: '#87bef9', color: 'white' }}
        onClick={() => setFromCurrency('USD')}
      >
        From
      </button>

      <div className="dropdown">
        <select value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)}>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="INR">INR</option>
        </select>
      </div>

      <button
        style={{ margin: '10px', marginRight: '350px', marginLeft: '350px', backgroundColor: '#87bef9', color: 'white' }}
        onClick={() => setToCurrency('INR')}
      >
        To
      </button>

      <div className="dropdown">
        <select value={toCurrency} onChange={(e) => setToCurrency(e.target.value)}>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="INR">INR</option>
        </select>
      </div>

      <button
        style={{ margin: '10px', marginRight: '350px', marginLeft: '350px', backgroundColor: '#87bef9', color: 'white' }}
        onClick={handleConvert}
        disabled={loading}
      >
        {loading ? 'Converting...' : 'Convert'}
      </button>

      {error && <div style={{ color: 'red' }}>{error}</div>}

      <h3>Converted amount: {convertedAmount}</h3>

    </>
  )
}

export default App
