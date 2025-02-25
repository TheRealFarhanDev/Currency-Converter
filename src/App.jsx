import CurrencyCard from './assets/components/CurrencyCard'
import './App.css'
import { useState, useEffect } from 'react'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [amount, setAmount] = useState(0)
  const [convertedAmount, setConvertedAmount] = useState(0)

  const CurrencyInfo = useCurrencyInfo(from);
  const options = Object.keys(CurrencyInfo)
  
  const swap = ()=>{
    const tempAmount = amount;
    setAmount(convertedAmount);
    setConvertedAmount(tempAmount);
    setFrom(to);
    setTo(from);
  }

  const convert = ()=>{
    setConvertedAmount((amount * CurrencyInfo[to]).toFixed(2));
  }

  useEffect(() => {
    if (options && CurrencyInfo[to]) {
      setConvertedAmount((amount * CurrencyInfo[to]).toFixed(2));
    }
  }, [from, to, amount, options, CurrencyInfo, convertedAmount]);

  return (
    <>
      <div className=' w-screen h-screen bg-[url(./assets/background.jpg)] bg-center bg-cover bg-no-repeat flex items-center justify-center'>
        <div className="w-full">
          <div className="w-full max-w-md mx-auto border border-gray-600 rounded-lg p-5 backdrop-blur-sm bg-white/30">
            <form onSubmit={(e)=>{
              e.preventDefault();
              convert()
            }}>
              <div className='w-full mb-1'>
                <CurrencyCard label={from} amount={amount} currencyOptions={options} onCurrencyChange={(currency)=>{setFrom(currency)}} selectCurrency={from} onAmountChange={(amount)=>{setAmount(amount)}} />
              </div>
              <div className='relative w-full h-0.5'>
                <button onClick={swap} className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white bg-blue-600 rounded-md text-white py-1 px-2 cursor-pointer'>Swap</button>
              </div>
              <div className='w-full mt-1 mb-4'>
                <CurrencyCard label={to} amount={convertedAmount} onCurrencyChange={(currency)=>{setTo(currency)}} currencyOptions={options} selectCurrency={to} onAmountChange={(amount)=>{setConvertedAmount(amount)}}/>
              </div>
              <div>
                <button type='submit' className='w-full bg-blue-600 text-white py-3 border-1 border-black rounded-lg cursor-pointer'>CONVERT {from} TO {to}</button>
              </div>
            </form>
          </div>
        </div>
      </div >
    </>
  )
}

export default App
