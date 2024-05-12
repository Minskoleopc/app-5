import React , {useState} from 'react'

function HookCounterThree(){

    const [name , setName ] =useState({firstName:'',lastName:''})

    return (
        <form>
            <input type='text' value = {name.firstname} onChange={ e => setName({...name,firstName:e.target.value})}/>
            <input type='text' value = {name.lastName} onChange={ e => setName({...name,lastName:e.target.value})}/>
            <h1>your firstName is - {name.firstName}</h1>
            <h1>your lastName is - {name.lastName}</h1>
        </form>

    )

}
export default HookCounterThree