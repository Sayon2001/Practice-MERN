import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    // --first-type--
    // useEffect(() => {
    //     console.log('haha ma yeta xu')
    //     //data fetch logic
    // }, [])

    const [count, setCount] = useState(0)
    const [like, setLike] = useState(0)
    const increaseCount = () => {
        setCount(count + 1)
    }

    const decreaseCount = () => {
        setCount(count - 1)
    }

    const increaseLikes = () => {
        setLike(like + 1)
    }

    // --second-type--
    useEffect(() => {
        console.log('count and like updated')
        document.title = `You clicked ${count} times`
    }, [count, like]) // run only when count and like changes
    return (
        <>
            <h1>{count}</h1>
            <button onClick={increaseCount}>+</button>
            <button onClick={decreaseCount}>-</button>
            <h2>Like : {like}</h2>
            <button onClick={increaseLikes}>Like me</button>
        </>
    )
}

export default UseEffect
