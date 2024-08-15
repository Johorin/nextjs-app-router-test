import { useState } from 'react';

const ReRenderingTest = () => {
    const [count, setCount] = useState(0);
    console.log(count);

    return (
        <div>
            <h1>再レンダリングテスト</h1>
            <p>カウント：{count}</p>
            <button onClick={() => setCount(count + 1)}>カウントを追加</button>
        </div>
    );
};

export default ReRenderingTest;