import React , {useState}  from React;

function CounterF(){

    const [count, setCount] = useState(0)

    const increment = ()=>{
        setCount( (preCount) => preCount + 1 )
    }
    const incrementFive =() =>{
        increment();
        increment();
        increment();
        increment();
        increment();
    }

    return(
        <div>
            <div>Count:{count}</div>
            {/* <button onClick={this.increment}>increment</button> */}
            <button onClick={incrementFive}>increment</button>
        </div>
    )        
}

export default CounterF