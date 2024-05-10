import React, { useState } from 'react'
function CounterObj() {
    const [name, setName] = useState({ firstName: "", lastName: ""})

    const updateValuefn = (e) => {
        console.log('bye')
        setName({...name,firstName:e.target.value})
    }
    const updateValueln = (e) => {
        console.log("hello")
        setName({...name,lastName:e.target.value})
    }
    return (
        <form>
            <input
                type="text"
                value={name.firstName}
                onChange={updateValuefn}
            />
             <input
                type="text"
                value={name.lastName}
                onChange={updateValueln}
               
            />
            <h2>Your firstName is {name.firstName}</h2>
            <h2>Your lastName is {name.lastName}</h2>
            <h2>{JSON.stringify(name)}</h2>
        </form>
    )
}

export default CounterObj;


