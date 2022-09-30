import { useMemo, useState } from "react";

const fibonacci = (num) => {
    if (num <= 1) {
        return 1;
    }

    return fibonacci(num - 1) + fibonacci(num - 2);
}

const UseMemoExample = () => {
    const [number, setNumber] = useState(35);
    const [img, setImg] = useState(null);
    const memoFib = useMemo(() => fibonacci(number), [number]);

    return (
        <div style={{ margin: '0 auto', width: '400px' }}>
            <h1>Fibonacci of {number} is {memoFib}</h1>
            {/*<h1>Fibonacci of {number} is {fibonacci(number)}</h1>*/}
            <button onClick={() => setNumber(number + 1)}>Increment +</button>
            <button onClick={() => {
                fetch('https://dog.ceo/api/breeds/image/random')
                .then((data) => data.json())
                .then(dogImg => setImg(dogImg.message))
            }}> Get Dog Pic
            </button>
            <div>
                {img && <img src={img} alt='dog pic' />}
            </div>
        </div>
    )
}

export default UseMemoExample;
