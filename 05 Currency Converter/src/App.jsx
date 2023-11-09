import { useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {
  // State variables
  const [amount, setAmount] = useState(0) // The input amount
  const [from, setFrom] = useState("usd") // The source currency
  const [to, setTo] = useState("inr") // The target currency
  const [convertedAmount, setConvertedAmount] = useState(0) // The converted amount

  // Fetch currency exchange rate data
  const currencyInfo = useCurrencyInfo(from)

  // Get the available currency options
  const options = Object.keys(currencyInfo)

  // Function to swap the source and target currencies
  const swap = () => {
    setFrom(to) // Swap the source and target currencies
    setTo(from)
    setAmount(convertedAmount) // Swap the input amount and converted amount
  }
  
  // Function to perform the currency conversion
  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]) // Calculate the converted amount
  }

  return (
    <div className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat" style={{
      backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
    }}>
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form onSubmit={(e) => {
            e.preventDefault();
            convert(); // Handle the conversion when the form is submitted
          }}>
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setFrom(currency)} // Handle source currency change
                selectCurrency={from} // Set the selected source currency
                onAmountChange={(amount) => setAmount(amount)} // Handle input amount change
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap} // Trigger the swap function when the button is clicked
              >
                Swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)} // Handle target currency change
                selectCurrency={to} // Set the selected target currency
                amountDisable // Disable input for converted amount
              />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
