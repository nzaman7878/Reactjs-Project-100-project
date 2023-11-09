import { useEffect, useState } from "react"

function useCurrencyInfo(currency) {
    // State variable to store currency data
    const [data, setData] = useState({})

    useEffect(() => {
        // Fetch currency exchange rate data when the "currency" dependency changes
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
            .then((res) => res.json())
            .then((res) => {
                setData(res[currency]); // Set the fetched currency data in the state
                console.log(data); // This log won't reflect the updated data immediately
            });
    }, [currency]);

    console.log(data); // This log will show the initial value of "data" (an empty object)

    return data; // Return the currency data, which will be initially an empty object
}

export default useCurrencyInfo;
