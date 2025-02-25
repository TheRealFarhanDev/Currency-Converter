import React, {useId} from 'react'

const CurrencyCard = ({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd"
}) => {
  const id = useId();
  //API - https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json
  return (<>
    <div className='bg-white p-3 rounded-lg flex text-sm  w-full'>
      <div className='w-1/2'>
        <label htmlFor={id} className='text-black/40 mb-2 inline-block'>{label}</label>
        <input id={id} type="number" className='bg-transparent py-1.5 outline-none w-full' placeholder='Amount' value={amount} onChange={(e)=>onAmountChange && onAmountChange(Number(e.target.value))}/>
      </div>
    <div className='flex flex-wrap justify-end w-1/2 text-right'>
      <p className='text-black/40 mb-2 w-full'>Currency Type</p>
      <select className='outline-none rounded-lg py-1 px-3 cursor-pointer bg-gray-100 ' value={selectCurrency} onChange={(e)=>onCurrencyChange && onCurrencyChange(e.target.value)}>
        {currencyOptions.map((item)=> (
          <option key={item} value={item}>{item.toUpperCase()}</option>
        ))}
      </select>
    </div>
    </div>
  </>
  )
}

export default CurrencyCard;
