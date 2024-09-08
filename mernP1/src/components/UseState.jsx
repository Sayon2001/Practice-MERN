import { useState } from "react";
import Button from "./Button";

function UseState() {

    const [count, setCount] = useState(0)

    const increaseCount = () => {
        setCount(count + 1)
    }

    const decreaseCount = () => {
        setCount(count - 1)
    }

    return (
        <>
            <div className="useState-container">
                <h1>Count = {count}</h1>
                <Button text="+" onClick={increaseCount} className="useState-button"></Button>
                <Button text="-" onClick={decreaseCount} className="useState-button"></Button>
            </div>
        </>
    )

}

export default UseState;