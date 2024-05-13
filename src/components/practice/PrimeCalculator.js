import React, { useMemo, useState } from "react";
import calculatePrimes from "./calculatePrimes";

export default function PrimeCalculator (props) {
    const [limit, setLimit] = useState(10);
    const [count, setCount] = useState(0);

    // const primes = calculatePrimes(limit);
    const primes = useMemo(() =>
         calculatePrimes(limit)
    , [limit]);

    const addCount = () => {
        setCount(count+1);
    }

    return(
        <div>
            {count}
            <button onClick={addCount}>카운트 증가</button>
            <input 
                type = "number"
                value={limit}
                onChange={(e) => {setLimit(Number(e.target.value))}}
            />
            <p>계산된 소수 : {primes.join(', ')}</p>
        </div>
    );
}