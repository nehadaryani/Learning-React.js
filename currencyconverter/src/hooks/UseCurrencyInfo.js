import { useEffect, useState } from "react";

function UseCurrencyInfo(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        if (!currency) return; // Ensure currency is selected

        const fetchData = async () => {
            try {
                const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${currency}`);
                const result = await response.json();
                setData(result.rates); // Store exchange rates
            } catch (error) {
                console.error("Error fetching currency data:", error);
            }
        };

        fetchData();
    }, [currency]);

    return data;
}

export default UseCurrencyInfo;
