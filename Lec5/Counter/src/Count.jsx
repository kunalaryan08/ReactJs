import { useState } from "react";
function Count(){

    let [counter, setCounter] = useState(0);

    const increase = () => {
        // console.log("Value Increased -> " + counter);
        counter = counter + 1;
        if(counter <= 20){
           setCounter(counter);
        }
    }
    
    const decrease = () => {
        // console.log("Value decreased -> " + counter);
        counter = counter - 1;
        if(counter >= 0){
            setCounter(counter);
        }
    }
    return(
        <>
            <h1>
                Counter
            </h1>
            <h2>Counter : {counter}</h2>
            <button onClick={increase}> ++ </button>
            <button onClick={decrease}> -- </button>
            <footer>Value : {counter} </footer>
        </>
    )
}

export default Count;