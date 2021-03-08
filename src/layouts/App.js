import React, {useState} from 'react';

function App() {

    const [count, setCount] = useState(0);

    const onClickButton = (actionName) => {
        let countValue = count;
        if (actionName === 'minus' && countValue > 0) {
            setCount(--countValue)
        } else if(actionName === 'plus') {
            setCount(++countValue)
        }
    }

    return (
        <div className='container center'>
            <h1>App test</h1>
            <h3>Counter</h3>

            <div className="row mt-3">
                <button onClick={() => onClickButton('minus')}>-</button>
                <p>{count}</p>
                <button onClick={() => onClickButton('plus')}>+</button>
            </div>
        </div>
    );
}

export default App;
