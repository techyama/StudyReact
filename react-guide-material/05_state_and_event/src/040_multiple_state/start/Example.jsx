import { useState, Fragment } from "react";

const Example = () => {
    const [aVal, setAval] = useState(0);
    const [bVal, setBval] = useState(10);
    const [cVal, setCval] = useState(100);

    return (
        <Fragment>
            <p>ボタンAを{aVal}回押しました！</p>
            <button onClick={() => {
                setAval(aVal+1);
            }}>ボタンA</button>
            <p>ボタンBを{bVal}回押しました！</p>
            <button>ボタンB</button>
            <p>ボタンCを{cVal}回押しました！</p>
            <button>ボタンC</button>
        </Fragment>

    );
};

export default Example;
